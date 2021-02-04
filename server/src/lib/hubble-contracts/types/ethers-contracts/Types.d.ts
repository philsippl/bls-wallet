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

interface TypesInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESS_MASK()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESS_MASK",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESS_MASK",
    data: BytesLike
  ): Result;

  events: {};
}

export class Types extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TypesInterface;

  functions: {
    ADDRESS_MASK(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ADDRESS_MASK()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  ADDRESS_MASK(overrides?: CallOverrides): Promise<BigNumber>;

  "ADDRESS_MASK()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ADDRESS_MASK(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESS_MASK()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ADDRESS_MASK(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESS_MASK()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESS_MASK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ADDRESS_MASK()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}