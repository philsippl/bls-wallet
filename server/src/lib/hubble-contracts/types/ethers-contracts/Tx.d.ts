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

interface TxInterface extends ethers.utils.Interface {
  functions: {
    "MANTISSA_BITS()": FunctionFragment;
    "MASK_AMOUNT()": FunctionFragment;
    "MASK_BYTE()": FunctionFragment;
    "MASK_EXPONENT()": FunctionFragment;
    "MASK_FEE()": FunctionFragment;
    "MASK_MANTISSA()": FunctionFragment;
    "MASK_NONCE()": FunctionFragment;
    "MASK_PUBKEY_ID()": FunctionFragment;
    "MASK_STATE_ID()": FunctionFragment;
    "MASK_TOKEN_ID()": FunctionFragment;
    "POSITION_AMOUNT_0()": FunctionFragment;
    "POSITION_AMOUNT_1()": FunctionFragment;
    "POSITION_AMOUNT_5()": FunctionFragment;
    "POSITION_FEE_0()": FunctionFragment;
    "POSITION_FEE_1()": FunctionFragment;
    "POSITION_FEE_5()": FunctionFragment;
    "POSITION_RECEIVER_0()": FunctionFragment;
    "POSITION_RECEIVER_1()": FunctionFragment;
    "POSITION_RECEIVER_ACCID_1()": FunctionFragment;
    "POSITION_SENDER_0()": FunctionFragment;
    "POSITION_SENDER_1()": FunctionFragment;
    "POSITION_SENDER_5()": FunctionFragment;
    "TX_LEN_0()": FunctionFragment;
    "TX_LEN_1()": FunctionFragment;
    "TX_LEN_5()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MANTISSA_BITS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASK_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MASK_BYTE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MASK_EXPONENT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MASK_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MASK_MANTISSA",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASK_NONCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASK_PUBKEY_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASK_STATE_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MASK_TOKEN_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_AMOUNT_0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_AMOUNT_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_AMOUNT_5",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_FEE_0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_FEE_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_FEE_5",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_RECEIVER_0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_RECEIVER_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_RECEIVER_ACCID_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_SENDER_0",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_SENDER_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_SENDER_5",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TX_LEN_0", values?: undefined): string;
  encodeFunctionData(functionFragment: "TX_LEN_1", values?: undefined): string;
  encodeFunctionData(functionFragment: "TX_LEN_5", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MANTISSA_BITS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MASK_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MASK_BYTE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MASK_EXPONENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MASK_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MASK_MANTISSA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MASK_NONCE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MASK_PUBKEY_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MASK_STATE_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MASK_TOKEN_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_AMOUNT_0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_AMOUNT_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_AMOUNT_5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_FEE_0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_FEE_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_FEE_5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_RECEIVER_0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_RECEIVER_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_RECEIVER_ACCID_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_SENDER_0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_SENDER_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_SENDER_5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TX_LEN_0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TX_LEN_1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TX_LEN_5", data: BytesLike): Result;

  events: {};
}

export class Tx extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TxInterface;

  functions: {
    MANTISSA_BITS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MANTISSA_BITS()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_AMOUNT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_AMOUNT()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_BYTE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_BYTE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_EXPONENT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_EXPONENT()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_FEE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_FEE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_MANTISSA(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_MANTISSA()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_NONCE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_NONCE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_PUBKEY_ID(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_PUBKEY_ID()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_STATE_ID(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_STATE_ID()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MASK_TOKEN_ID(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "MASK_TOKEN_ID()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_AMOUNT_0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_AMOUNT_0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_AMOUNT_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_AMOUNT_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_AMOUNT_5(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_AMOUNT_5()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_FEE_0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_FEE_0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_FEE_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_FEE_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_FEE_5(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_FEE_5()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_RECEIVER_0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_RECEIVER_0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_RECEIVER_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_RECEIVER_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_RECEIVER_ACCID_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_RECEIVER_ACCID_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_SENDER_0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_SENDER_0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_SENDER_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_SENDER_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    POSITION_SENDER_5(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "POSITION_SENDER_5()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    TX_LEN_0(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "TX_LEN_0()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    TX_LEN_1(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "TX_LEN_1()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    TX_LEN_5(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "TX_LEN_5()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  MANTISSA_BITS(overrides?: CallOverrides): Promise<BigNumber>;

  "MANTISSA_BITS()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_BYTE(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_BYTE()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_EXPONENT(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_EXPONENT()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_FEE()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_MANTISSA(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_MANTISSA()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_NONCE(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_NONCE()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_PUBKEY_ID(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_PUBKEY_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_STATE_ID(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_STATE_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

  MASK_TOKEN_ID(overrides?: CallOverrides): Promise<BigNumber>;

  "MASK_TOKEN_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_AMOUNT_0(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_AMOUNT_0()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_AMOUNT_1(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_AMOUNT_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_AMOUNT_5(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_AMOUNT_5()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_FEE_0(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_FEE_0()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_FEE_1(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_FEE_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_FEE_5(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_FEE_5()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_RECEIVER_0(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_RECEIVER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_RECEIVER_1(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_RECEIVER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_RECEIVER_ACCID_1(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_RECEIVER_ACCID_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_SENDER_0(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_SENDER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_SENDER_1(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_SENDER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_SENDER_5(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_SENDER_5()"(overrides?: CallOverrides): Promise<BigNumber>;

  TX_LEN_0(overrides?: CallOverrides): Promise<BigNumber>;

  "TX_LEN_0()"(overrides?: CallOverrides): Promise<BigNumber>;

  TX_LEN_1(overrides?: CallOverrides): Promise<BigNumber>;

  "TX_LEN_1()"(overrides?: CallOverrides): Promise<BigNumber>;

  TX_LEN_5(overrides?: CallOverrides): Promise<BigNumber>;

  "TX_LEN_5()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MANTISSA_BITS(overrides?: CallOverrides): Promise<BigNumber>;

    "MANTISSA_BITS()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_BYTE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_BYTE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_EXPONENT(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_EXPONENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_FEE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_MANTISSA(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_MANTISSA()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_NONCE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_NONCE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_PUBKEY_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_PUBKEY_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_STATE_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_STATE_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_TOKEN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_TOKEN_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_ACCID_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_ACCID_1()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    POSITION_SENDER_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_SENDER_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_SENDER_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_0(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_1(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_5(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_5()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    MANTISSA_BITS(overrides?: CallOverrides): Promise<BigNumber>;

    "MANTISSA_BITS()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_BYTE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_BYTE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_EXPONENT(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_EXPONENT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_FEE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_MANTISSA(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_MANTISSA()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_NONCE(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_NONCE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_PUBKEY_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_PUBKEY_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_STATE_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_STATE_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    MASK_TOKEN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "MASK_TOKEN_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_AMOUNT_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_AMOUNT_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_FEE_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_FEE_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_RECEIVER_ACCID_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_RECEIVER_ACCID_1()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    POSITION_SENDER_0(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_SENDER_1(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_SENDER_5(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_SENDER_5()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_0(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_0()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_1(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_1()"(overrides?: CallOverrides): Promise<BigNumber>;

    TX_LEN_5(overrides?: CallOverrides): Promise<BigNumber>;

    "TX_LEN_5()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MANTISSA_BITS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MANTISSA_BITS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_AMOUNT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_BYTE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_BYTE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_EXPONENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_EXPONENT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_FEE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_MANTISSA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_MANTISSA()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_NONCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_NONCE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_PUBKEY_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_PUBKEY_ID()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MASK_STATE_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_STATE_ID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASK_TOKEN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MASK_TOKEN_ID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSITION_AMOUNT_0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_AMOUNT_0()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_AMOUNT_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_AMOUNT_1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_AMOUNT_5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_AMOUNT_5()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_FEE_0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_FEE_0()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_FEE_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_FEE_1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_FEE_5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_FEE_5()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_RECEIVER_0(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "POSITION_RECEIVER_0()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_RECEIVER_1(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "POSITION_RECEIVER_1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_RECEIVER_ACCID_1(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "POSITION_RECEIVER_ACCID_1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_SENDER_0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_SENDER_0()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_SENDER_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_SENDER_1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_SENDER_5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_SENDER_5()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TX_LEN_0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TX_LEN_0()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TX_LEN_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TX_LEN_1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TX_LEN_5(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TX_LEN_5()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}