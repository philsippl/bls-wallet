/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface TestDepositCoreInterface extends ethers.utils.Interface {
  functions: {
    "babyTrees(uint256)": FunctionFragment;
    "babyTreesLength()": FunctionFragment;
    "back()": FunctionFragment;
    "depositCount()": FunctionFragment;
    "front()": FunctionFragment;
    "getQueue(uint256)": FunctionFragment;
    "paramMaxSubtreeSize()": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "testInsertAndMerge(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "babyTrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "babyTreesLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "back", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "front", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "paramMaxSubtreeSize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "testInsertAndMerge",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "babyTrees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "babyTreesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "back", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "front", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getQueue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paramMaxSubtreeSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testInsertAndMerge",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestDepositCore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestDepositCoreInterface;

  functions: {
    babyTrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "babyTrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    babyTreesLength(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "babyTreesLength()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    back(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "back()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    depositCount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "depositCount()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    front(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "front()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getQueue(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getQueue(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    paramMaxSubtreeSize(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "paramMaxSubtreeSize()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    queue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "queue(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    testInsertAndMerge(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "testInsertAndMerge(bytes32)"(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  babyTrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "babyTrees(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  babyTreesLength(overrides?: CallOverrides): Promise<BigNumber>;

  "babyTreesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  back(overrides?: CallOverrides): Promise<BigNumber>;

  "back()"(overrides?: CallOverrides): Promise<BigNumber>;

  depositCount(overrides?: CallOverrides): Promise<BigNumber>;

  "depositCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  front(overrides?: CallOverrides): Promise<BigNumber>;

  "front()"(overrides?: CallOverrides): Promise<BigNumber>;

  getQueue(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "getQueue(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  paramMaxSubtreeSize(overrides?: CallOverrides): Promise<BigNumber>;

  "paramMaxSubtreeSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  queue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "queue(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  testInsertAndMerge(
    depositLeaf: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "testInsertAndMerge(bytes32)"(
    depositLeaf: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    babyTrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "babyTrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    babyTreesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "babyTreesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    back(overrides?: CallOverrides): Promise<BigNumber>;

    "back()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositCount(overrides?: CallOverrides): Promise<BigNumber>;

    "depositCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    front(overrides?: CallOverrides): Promise<BigNumber>;

    "front()"(overrides?: CallOverrides): Promise<BigNumber>;

    getQueue(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "getQueue(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    paramMaxSubtreeSize(overrides?: CallOverrides): Promise<BigNumber>;

    "paramMaxSubtreeSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    queue(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "queue(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    testInsertAndMerge(
      depositLeaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      gasCost: BigNumber;
      readySubtree: string;
      0: BigNumber;
      1: string;
    }>;

    "testInsertAndMerge(bytes32)"(
      depositLeaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      gasCost: BigNumber;
      readySubtree: string;
      0: BigNumber;
      1: string;
    }>;
  };

  filters: {};

  estimateGas: {
    babyTrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "babyTrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    babyTreesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "babyTreesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    back(overrides?: CallOverrides): Promise<BigNumber>;

    "back()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositCount(overrides?: CallOverrides): Promise<BigNumber>;

    "depositCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    front(overrides?: CallOverrides): Promise<BigNumber>;

    "front()"(overrides?: CallOverrides): Promise<BigNumber>;

    getQueue(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getQueue(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paramMaxSubtreeSize(overrides?: CallOverrides): Promise<BigNumber>;

    "paramMaxSubtreeSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    queue(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "queue(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testInsertAndMerge(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "testInsertAndMerge(bytes32)"(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    babyTrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "babyTrees(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    babyTreesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "babyTreesLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    back(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "back()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "depositCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    front(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "front()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getQueue(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getQueue(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paramMaxSubtreeSize(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "paramMaxSubtreeSize()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "queue(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testInsertAndMerge(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "testInsertAndMerge(bytes32)"(
      depositLeaf: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}