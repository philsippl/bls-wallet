import { expect, assert } from "chai";

import { network, ethers as hhEthers, l2ethers } from "hardhat";

let ethers:typeof hhEthers | typeof l2ethers;
ethers = hhEthers;
if (network.name == "optimism") {
  ethers = l2ethers;
}

import { BigNumber, Signer, Contract, ContractFactory, getDefaultProvider } from "ethers";
const utils = ethers.utils;

// import * as mcl from "../server/src/lib/hubble-bls/src/mcl";

import { BlsSignerFactory, BlsSignerInterface, aggregate } from "../server/src/lib/hubble-bls/src/signer";
import { keccak256, arrayify, Interface, Fragment, ParamType } from "ethers/lib/utils";

const DOMAIN_HEX = utils.keccak256("0xfeedbee5");
const DOMAIN = arrayify(DOMAIN_HEX);

const zeroBLSPubKey = [0, 0, 0, 0].map(BigNumber.from);


let signers: Signer[];
let addresses: string[];

let blsSignerFactory: BlsSignerFactory;
let blsSigners: BlsSignerInterface[];

let VerificationGateway: ContractFactory;
let verificationGateway: Contract;

let BLSExpander: ContractFactory;
let blsExpander: Contract;

let BLSWalletProxy: ContractFactory;

let testToken: Contract;
const initialSupply = ethers.utils.parseUnits("1000000")
const ACCOUNTS_LENGTH = 5;
const userStartAmount = initialSupply.div(ACCOUNTS_LENGTH);

async function init() {
  signers = (await ethers.getSigners()).slice(0, ACCOUNTS_LENGTH);
  addresses = await Promise.all(signers.map(acc => acc.getAddress()));

  blsSignerFactory = await BlsSignerFactory.new();
  blsSigners = addresses.map( add => blsSignerFactory.getSigner(DOMAIN, add) );

  // deploy Verification Gateway
  VerificationGateway = await ethers.getContractFactory("VerificationGateway");
  verificationGateway = await VerificationGateway.deploy(); 
  await verificationGateway.deployed();

  BLSExpander = await ethers.getContractFactory("BLSExpander");
  blsExpander = await BLSExpander.deploy(verificationGateway.address); 
  await blsExpander.deployed();

  BLSWalletProxy = await ethers.getContractFactory("BLSWalletProxy");

}

describe.only('VerificationGateway', async function () {
  
  beforeEach(init);

  it('should register new wallet', async function () {
    let blsSigner = blsSigners[0];  
    let walletAddress = await createBLSWallet(blsSigner);

    let blsWalletProxy = BLSWalletProxy.attach(walletAddress);
    expect(await blsWalletProxy.publicKeyHash())
      .to.equal(blsKeyHash(blsSigner));
  });

  it("should process individual calls", async function() {
    let blsWalletAddresses = await Promise.all(blsSigners.map( s => createBLSWallet(s)));

    // setup erc20 token
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    testToken = await MockERC20.deploy("AnyToken","TOK", initialSupply);
    await testToken.deployed();

    // split supply amongst bls wallet addresses
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      // first account as aggregator, and holds token supply
      await testToken.connect(signers[0]).transfer(
        blsWalletAddresses[i],
        userStartAmount
      );
    }

    // check each wallet has start amount
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(userStartAmount);
    }

    // bls transfer each wallet's balance to first wallet
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      await transferFrom(
        await BLSWalletProxy.attach(blsWalletAddresses[i]).nonce(),
        blsSigners[i],
        blsWalletAddresses[0],
        userStartAmount
      );
    }

    // check first wallet full and others empty
    let totalAmount = userStartAmount.mul(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(i==0?totalAmount:0);
    }
  });

  it("should process multiple transfers", async function() {
    let blsWalletAddresses = await Promise.all(blsSigners.map( s => createBLSWallet(s)));

    // setup erc20 token
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    testToken = await MockERC20.deploy("AnyToken","TOK", initialSupply);
    await testToken.deployed();

    // split supply amongst bls wallet addresses
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      // first account as aggregator, and holds token supply
      await testToken.connect(signers[0]).transfer(
        blsWalletAddresses[i],
        userStartAmount
      );
    }

    // encode transfer of start amount to first wallet
    let encodedFunction = testToken.interface.encodeFunctionData(
      "transfer",
      [blsWalletAddresses[0], userStartAmount.toString()]
    );

    let signatures: any[] = new Array(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let dataToSign = dataPayload(
        await BLSWalletProxy.attach(blsWalletAddresses[i]).nonce(),
        testToken.address,
        encodedFunction
      );
      signatures[i] = blsSigners[i].sign(dataToSign);
    }

    // each bls wallet to sign same transfer data
    // let signatures = blsSigners.map(b => b.sign(dataToSign));
    let aggSignature = aggregate(signatures);

    // can be called by any ecdsa wallet
    await blsExpander.blsCallMultiSameContractFunctionParams(
      blsSigners.map(blsKeyHash),
      aggSignature,
      testToken.address,
      encodedFunction.substring(0,10),
      '0x'+encodedFunction.substr(10)
    );
    // let length = signatures.length;
    // await verificationGateway.blsCallMany(
    //   blsSigners.map(blsKeyHash), // corresponding bls signers
    //   aggSignature,
    //   Array(length).fill(testToken.address), // call to same contract
    //   Array(length).fill(encodedFunction.substring(0,10)), // same function
    //   Array(length).fill('0x'+encodedFunction.substr(10)) // same params
    // );

    let totalAmount = userStartAmount.mul(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(i==0?totalAmount:0);
    }
  });



  // TODO: test multiple txs from same wallet

});


// Helper functions

function blsKeyHash(blsSigner: BlsSignerInterface) {
  return keccak256(utils.solidityPack(
    ["uint256[4]"],
    [blsSigner.pubkey]
  ));
}

function dataPayload(
  nonce: any,
  contractAddress: any,
  encodedFunction: string
) {
  let encodedFunctionHash = utils.solidityKeccak256(
    ["bytes"],
    [encodedFunction]
  );
  return utils.solidityPack(
    ["uint256","address","bytes32"],
    [
      nonce,
      contractAddress.toString(),
      encodedFunctionHash
    ]
  ); 
}

async function gatewayCall(
  blsSigner,
  nonce,
  contractAddress,
  encodedFunction
) {
  let dataToSign = dataPayload(
    nonce,
    contractAddress,
    encodedFunction
  );
  let signature = blsSigner.sign(dataToSign);

  // can be called by any ecdsa wallet
  await verificationGateway.blsCall(
    blsKeyHash(blsSigner),
    signature,
    contractAddress,
    encodedFunction.substring(0,10),
    '0x'+encodedFunction.substr(10)
  );
}

async function createBLSWallet(blsSigner: BlsSignerInterface): Promise<any> {

  const blsPubKeyHash = blsKeyHash(blsSigner);

  let encodedFunction = VerificationGateway.interface.encodeFunctionData(
    "walletCrossCheck",
    [blsPubKeyHash]
  );

  let dataToSign = await dataPayload(
    0,
    verificationGateway.address,
    encodedFunction
  );

  let signature = blsSigner.sign(dataToSign);

  // can be called by any ecdsa wallet
  await verificationGateway.blsCallCreate(
    blsSigner.pubkey,
    signature,
    verificationGateway.address,
    encodedFunction.substring(0,10),
    '0x'+encodedFunction.substr(10)
  );

  return await verificationGateway.walletFromHash(blsPubKeyHash);
}

async function transferFrom(
  nonce: any,
  sender: BlsSignerInterface,
  recipient: string,
  amount: BigNumber
) {
  let encodedFunction = testToken.interface.encodeFunctionData(
    "transfer",
    [recipient, amount.toString()]
  );
  gatewayCall(sender, nonce, testToken.address, encodedFunction);
}