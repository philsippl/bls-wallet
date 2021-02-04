/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from "ethers";
import {Provider} from "@ethersproject/providers";

import {ITokenRegistry} from "./ITokenRegistry";

export class ITokenRegistryFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenRegistry {
    return new Contract(address, _abi, signerOrProvider) as ITokenRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenID",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address"
      }
    ],
    name: "RegisteredToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address"
      }
    ],
    name: "RegistrationRequest",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address"
      }
    ],
    name: "finaliseRegistration",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "tokenContract",
        type: "address"
      }
    ],
    name: "requestRegistration",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256"
      }
    ],
    name: "safeGetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];