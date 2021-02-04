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
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface FrontendGenericInterface extends ethers.utils.Interface {
  functions: {
    "decodeState(bytes)": FunctionFragment;
    "encode(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decodeState",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encode",
    values: [
      {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "decodeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;

  events: {};
}

export class FrontendGeneric extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FrontendGenericInterface;

  functions: {
    decodeState(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      state: {
        pubkeyID: BigNumber;
        tokenID: BigNumber;
        balance: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      };
      0: {
        pubkeyID: BigNumber;
        tokenID: BigNumber;
        balance: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      };
    }>;

    "decodeState(bytes)"(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      state: {
        pubkeyID: BigNumber;
        tokenID: BigNumber;
        balance: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      };
      0: {
        pubkeyID: BigNumber;
        tokenID: BigNumber;
        balance: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      };
    }>;

    encode(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "encode(tuple)"(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  decodeState(
    stateBytes: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    pubkeyID: BigNumber;
    tokenID: BigNumber;
    balance: BigNumber;
    nonce: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  "decodeState(bytes)"(
    stateBytes: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    pubkeyID: BigNumber;
    tokenID: BigNumber;
    balance: BigNumber;
    nonce: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  encode(
    state: {
      pubkeyID: BigNumberish;
      tokenID: BigNumberish;
      balance: BigNumberish;
      nonce: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "encode(tuple)"(
    state: {
      pubkeyID: BigNumberish;
      tokenID: BigNumberish;
      balance: BigNumberish;
      nonce: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    decodeState(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      pubkeyID: BigNumber;
      tokenID: BigNumber;
      balance: BigNumber;
      nonce: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    "decodeState(bytes)"(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      pubkeyID: BigNumber;
      tokenID: BigNumber;
      balance: BigNumber;
      nonce: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    encode(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "encode(tuple)"(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    decodeState(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "decodeState(bytes)"(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encode(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encode(tuple)"(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decodeState(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decodeState(bytes)"(
      stateBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encode(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encode(tuple)"(
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}