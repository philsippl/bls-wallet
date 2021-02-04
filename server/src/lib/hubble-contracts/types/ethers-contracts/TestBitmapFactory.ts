/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {TestBitmap} from "./TestBitmap";

export class TestBitmapFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestBitmap> {
    return super.deploy(overrides || {}) as Promise<TestBitmap>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestBitmap {
    return super.attach(address) as TestBitmap;
  }
  connect(signer: Signer): TestBitmapFactory {
    return super.connect(signer) as TestBitmapFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestBitmap {
    return new Contract(address, _abi, signerOrProvider) as TestBitmap;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "testIsClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "testSetClaimed",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610122806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80634b5d0029146037578063c41d7fc7146053575b600080fd5b605160048036036020811015604b57600080fd5b50356081565b005b606d60048036036020811015606757600080fd5b5035608d565b604080519115158252519081900360200190f35b608a816000609e565b50565b6000609882600060c6565b92915050565b61010082046000908152602091909152604090208054600160ff9093169290921b9091179055565b610100820460009081526020919091526040902054600160ff9092169190911b908116149056fea265627a7a72315820b2e94cfc12184a91b907dcd0112fcc9fe7391c313a2a37721de74d6d3f8d9d1964736f6c634300050f0032";