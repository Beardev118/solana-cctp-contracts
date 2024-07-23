/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MessageTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "IS_SCRIPT"
      | "IS_TEST"
      | "failed"
      | "testAddressToBytes32ToAddress_fuzz"
      | "testFormatMessage"
      | "testFormatMessage_fuzz"
      | "testIsValidMessage_revertsForMalformedMessage"
      | "testIsValidMessage_revertsForTooShortMessage"
      | "vm"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "log"
      | "log_address"
      | "log_array(uint256[])"
      | "log_array(int256[])"
      | "log_array(address[])"
      | "log_bytes"
      | "log_bytes32"
      | "log_int"
      | "log_named_address"
      | "log_named_array(string,uint256[])"
      | "log_named_array(string,int256[])"
      | "log_named_array(string,address[])"
      | "log_named_bytes"
      | "log_named_bytes32"
      | "log_named_decimal_int"
      | "log_named_decimal_uint"
      | "log_named_int"
      | "log_named_string"
      | "log_named_uint"
      | "log_string"
      | "log_uint"
      | "logs"
  ): EventFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testAddressToBytes32ToAddress_fuzz",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testFormatMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testFormatMessage_fuzz",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "testIsValidMessage_revertsForMalformedMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testIsValidMessage_revertsForTooShortMessage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testAddressToBytes32ToAddress_fuzz",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testFormatMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testFormatMessage_fuzz",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testIsValidMessage_revertsForMalformedMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testIsValidMessage_revertsForTooShortMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;
}

export namespace logEvent {
  export type InputTuple = [arg0: string];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_addressEvent {
  export type InputTuple = [arg0: AddressLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_uint256_array_Event {
  export type InputTuple = [val: BigNumberish[]];
  export type OutputTuple = [val: bigint[]];
  export interface OutputObject {
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_int256_array_Event {
  export type InputTuple = [val: BigNumberish[]];
  export type OutputTuple = [val: bigint[]];
  export interface OutputObject {
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_array_address_array_Event {
  export type InputTuple = [val: AddressLike[]];
  export type OutputTuple = [val: string[]];
  export interface OutputObject {
    val: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_bytesEvent {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_bytes32Event {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_intEvent {
  export type InputTuple = [arg0: BigNumberish];
  export type OutputTuple = [arg0: bigint];
  export interface OutputObject {
    arg0: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_addressEvent {
  export type InputTuple = [key: string, val: AddressLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_uint256_array_Event {
  export type InputTuple = [key: string, val: BigNumberish[]];
  export type OutputTuple = [key: string, val: bigint[]];
  export interface OutputObject {
    key: string;
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_int256_array_Event {
  export type InputTuple = [key: string, val: BigNumberish[]];
  export type OutputTuple = [key: string, val: bigint[]];
  export interface OutputObject {
    key: string;
    val: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_array_string_address_array_Event {
  export type InputTuple = [key: string, val: AddressLike[]];
  export type OutputTuple = [key: string, val: string[]];
  export interface OutputObject {
    key: string;
    val: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_bytesEvent {
  export type InputTuple = [key: string, val: BytesLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_bytes32Event {
  export type InputTuple = [key: string, val: BytesLike];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_decimal_intEvent {
  export type InputTuple = [
    key: string,
    val: BigNumberish,
    decimals: BigNumberish
  ];
  export type OutputTuple = [key: string, val: bigint, decimals: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
    decimals: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_decimal_uintEvent {
  export type InputTuple = [
    key: string,
    val: BigNumberish,
    decimals: BigNumberish
  ];
  export type OutputTuple = [key: string, val: bigint, decimals: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
    decimals: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_intEvent {
  export type InputTuple = [key: string, val: BigNumberish];
  export type OutputTuple = [key: string, val: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_stringEvent {
  export type InputTuple = [key: string, val: string];
  export type OutputTuple = [key: string, val: string];
  export interface OutputObject {
    key: string;
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_named_uintEvent {
  export type InputTuple = [key: string, val: BigNumberish];
  export type OutputTuple = [key: string, val: bigint];
  export interface OutputObject {
    key: string;
    val: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_stringEvent {
  export type InputTuple = [arg0: string];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace log_uintEvent {
  export type InputTuple = [arg0: BigNumberish];
  export type OutputTuple = [arg0: bigint];
  export interface OutputObject {
    arg0: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace logsEvent {
  export type InputTuple = [arg0: BytesLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MessageTest extends BaseContract {
  connect(runner?: ContractRunner | null): MessageTest;
  waitForDeployment(): Promise<this>;

  interface: MessageTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  IS_SCRIPT: TypedContractMethod<[], [boolean], "view">;

  IS_TEST: TypedContractMethod<[], [boolean], "view">;

  failed: TypedContractMethod<[], [boolean], "nonpayable">;

  testAddressToBytes32ToAddress_fuzz: TypedContractMethod<
    [_addr: AddressLike],
    [void],
    "nonpayable"
  >;

  testFormatMessage: TypedContractMethod<[], [void], "nonpayable">;

  testFormatMessage_fuzz: TypedContractMethod<
    [
      _version: BigNumberish,
      _sourceDomain: BigNumberish,
      _destinationDomain: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _recipient: BytesLike,
      _destinationCaller: BytesLike,
      _messageBody: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  testIsValidMessage_revertsForMalformedMessage: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  testIsValidMessage_revertsForTooShortMessage: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  vm: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "IS_SCRIPT"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "IS_TEST"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "failed"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "testAddressToBytes32ToAddress_fuzz"
  ): TypedContractMethod<[_addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "testFormatMessage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "testFormatMessage_fuzz"
  ): TypedContractMethod<
    [
      _version: BigNumberish,
      _sourceDomain: BigNumberish,
      _destinationDomain: BigNumberish,
      _nonce: BigNumberish,
      _sender: BytesLike,
      _recipient: BytesLike,
      _destinationCaller: BytesLike,
      _messageBody: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "testIsValidMessage_revertsForMalformedMessage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "testIsValidMessage_revertsForTooShortMessage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(nameOrSignature: "vm"): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "log"
  ): TypedContractEvent<
    logEvent.InputTuple,
    logEvent.OutputTuple,
    logEvent.OutputObject
  >;
  getEvent(
    key: "log_address"
  ): TypedContractEvent<
    log_addressEvent.InputTuple,
    log_addressEvent.OutputTuple,
    log_addressEvent.OutputObject
  >;
  getEvent(
    key: "log_array(uint256[])"
  ): TypedContractEvent<
    log_array_uint256_array_Event.InputTuple,
    log_array_uint256_array_Event.OutputTuple,
    log_array_uint256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_array(int256[])"
  ): TypedContractEvent<
    log_array_int256_array_Event.InputTuple,
    log_array_int256_array_Event.OutputTuple,
    log_array_int256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_array(address[])"
  ): TypedContractEvent<
    log_array_address_array_Event.InputTuple,
    log_array_address_array_Event.OutputTuple,
    log_array_address_array_Event.OutputObject
  >;
  getEvent(
    key: "log_bytes"
  ): TypedContractEvent<
    log_bytesEvent.InputTuple,
    log_bytesEvent.OutputTuple,
    log_bytesEvent.OutputObject
  >;
  getEvent(
    key: "log_bytes32"
  ): TypedContractEvent<
    log_bytes32Event.InputTuple,
    log_bytes32Event.OutputTuple,
    log_bytes32Event.OutputObject
  >;
  getEvent(
    key: "log_int"
  ): TypedContractEvent<
    log_intEvent.InputTuple,
    log_intEvent.OutputTuple,
    log_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_address"
  ): TypedContractEvent<
    log_named_addressEvent.InputTuple,
    log_named_addressEvent.OutputTuple,
    log_named_addressEvent.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,uint256[])"
  ): TypedContractEvent<
    log_named_array_string_uint256_array_Event.InputTuple,
    log_named_array_string_uint256_array_Event.OutputTuple,
    log_named_array_string_uint256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,int256[])"
  ): TypedContractEvent<
    log_named_array_string_int256_array_Event.InputTuple,
    log_named_array_string_int256_array_Event.OutputTuple,
    log_named_array_string_int256_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_array(string,address[])"
  ): TypedContractEvent<
    log_named_array_string_address_array_Event.InputTuple,
    log_named_array_string_address_array_Event.OutputTuple,
    log_named_array_string_address_array_Event.OutputObject
  >;
  getEvent(
    key: "log_named_bytes"
  ): TypedContractEvent<
    log_named_bytesEvent.InputTuple,
    log_named_bytesEvent.OutputTuple,
    log_named_bytesEvent.OutputObject
  >;
  getEvent(
    key: "log_named_bytes32"
  ): TypedContractEvent<
    log_named_bytes32Event.InputTuple,
    log_named_bytes32Event.OutputTuple,
    log_named_bytes32Event.OutputObject
  >;
  getEvent(
    key: "log_named_decimal_int"
  ): TypedContractEvent<
    log_named_decimal_intEvent.InputTuple,
    log_named_decimal_intEvent.OutputTuple,
    log_named_decimal_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_decimal_uint"
  ): TypedContractEvent<
    log_named_decimal_uintEvent.InputTuple,
    log_named_decimal_uintEvent.OutputTuple,
    log_named_decimal_uintEvent.OutputObject
  >;
  getEvent(
    key: "log_named_int"
  ): TypedContractEvent<
    log_named_intEvent.InputTuple,
    log_named_intEvent.OutputTuple,
    log_named_intEvent.OutputObject
  >;
  getEvent(
    key: "log_named_string"
  ): TypedContractEvent<
    log_named_stringEvent.InputTuple,
    log_named_stringEvent.OutputTuple,
    log_named_stringEvent.OutputObject
  >;
  getEvent(
    key: "log_named_uint"
  ): TypedContractEvent<
    log_named_uintEvent.InputTuple,
    log_named_uintEvent.OutputTuple,
    log_named_uintEvent.OutputObject
  >;
  getEvent(
    key: "log_string"
  ): TypedContractEvent<
    log_stringEvent.InputTuple,
    log_stringEvent.OutputTuple,
    log_stringEvent.OutputObject
  >;
  getEvent(
    key: "log_uint"
  ): TypedContractEvent<
    log_uintEvent.InputTuple,
    log_uintEvent.OutputTuple,
    log_uintEvent.OutputObject
  >;
  getEvent(
    key: "logs"
  ): TypedContractEvent<
    logsEvent.InputTuple,
    logsEvent.OutputTuple,
    logsEvent.OutputObject
  >;

  filters: {
    "log(string)": TypedContractEvent<
      logEvent.InputTuple,
      logEvent.OutputTuple,
      logEvent.OutputObject
    >;
    log: TypedContractEvent<
      logEvent.InputTuple,
      logEvent.OutputTuple,
      logEvent.OutputObject
    >;

    "log_address(address)": TypedContractEvent<
      log_addressEvent.InputTuple,
      log_addressEvent.OutputTuple,
      log_addressEvent.OutputObject
    >;
    log_address: TypedContractEvent<
      log_addressEvent.InputTuple,
      log_addressEvent.OutputTuple,
      log_addressEvent.OutputObject
    >;

    "log_array(uint256[])": TypedContractEvent<
      log_array_uint256_array_Event.InputTuple,
      log_array_uint256_array_Event.OutputTuple,
      log_array_uint256_array_Event.OutputObject
    >;
    "log_array(int256[])": TypedContractEvent<
      log_array_int256_array_Event.InputTuple,
      log_array_int256_array_Event.OutputTuple,
      log_array_int256_array_Event.OutputObject
    >;
    "log_array(address[])": TypedContractEvent<
      log_array_address_array_Event.InputTuple,
      log_array_address_array_Event.OutputTuple,
      log_array_address_array_Event.OutputObject
    >;

    "log_bytes(bytes)": TypedContractEvent<
      log_bytesEvent.InputTuple,
      log_bytesEvent.OutputTuple,
      log_bytesEvent.OutputObject
    >;
    log_bytes: TypedContractEvent<
      log_bytesEvent.InputTuple,
      log_bytesEvent.OutputTuple,
      log_bytesEvent.OutputObject
    >;

    "log_bytes32(bytes32)": TypedContractEvent<
      log_bytes32Event.InputTuple,
      log_bytes32Event.OutputTuple,
      log_bytes32Event.OutputObject
    >;
    log_bytes32: TypedContractEvent<
      log_bytes32Event.InputTuple,
      log_bytes32Event.OutputTuple,
      log_bytes32Event.OutputObject
    >;

    "log_int(int256)": TypedContractEvent<
      log_intEvent.InputTuple,
      log_intEvent.OutputTuple,
      log_intEvent.OutputObject
    >;
    log_int: TypedContractEvent<
      log_intEvent.InputTuple,
      log_intEvent.OutputTuple,
      log_intEvent.OutputObject
    >;

    "log_named_address(string,address)": TypedContractEvent<
      log_named_addressEvent.InputTuple,
      log_named_addressEvent.OutputTuple,
      log_named_addressEvent.OutputObject
    >;
    log_named_address: TypedContractEvent<
      log_named_addressEvent.InputTuple,
      log_named_addressEvent.OutputTuple,
      log_named_addressEvent.OutputObject
    >;

    "log_named_array(string,uint256[])": TypedContractEvent<
      log_named_array_string_uint256_array_Event.InputTuple,
      log_named_array_string_uint256_array_Event.OutputTuple,
      log_named_array_string_uint256_array_Event.OutputObject
    >;
    "log_named_array(string,int256[])": TypedContractEvent<
      log_named_array_string_int256_array_Event.InputTuple,
      log_named_array_string_int256_array_Event.OutputTuple,
      log_named_array_string_int256_array_Event.OutputObject
    >;
    "log_named_array(string,address[])": TypedContractEvent<
      log_named_array_string_address_array_Event.InputTuple,
      log_named_array_string_address_array_Event.OutputTuple,
      log_named_array_string_address_array_Event.OutputObject
    >;

    "log_named_bytes(string,bytes)": TypedContractEvent<
      log_named_bytesEvent.InputTuple,
      log_named_bytesEvent.OutputTuple,
      log_named_bytesEvent.OutputObject
    >;
    log_named_bytes: TypedContractEvent<
      log_named_bytesEvent.InputTuple,
      log_named_bytesEvent.OutputTuple,
      log_named_bytesEvent.OutputObject
    >;

    "log_named_bytes32(string,bytes32)": TypedContractEvent<
      log_named_bytes32Event.InputTuple,
      log_named_bytes32Event.OutputTuple,
      log_named_bytes32Event.OutputObject
    >;
    log_named_bytes32: TypedContractEvent<
      log_named_bytes32Event.InputTuple,
      log_named_bytes32Event.OutputTuple,
      log_named_bytes32Event.OutputObject
    >;

    "log_named_decimal_int(string,int256,uint256)": TypedContractEvent<
      log_named_decimal_intEvent.InputTuple,
      log_named_decimal_intEvent.OutputTuple,
      log_named_decimal_intEvent.OutputObject
    >;
    log_named_decimal_int: TypedContractEvent<
      log_named_decimal_intEvent.InputTuple,
      log_named_decimal_intEvent.OutputTuple,
      log_named_decimal_intEvent.OutputObject
    >;

    "log_named_decimal_uint(string,uint256,uint256)": TypedContractEvent<
      log_named_decimal_uintEvent.InputTuple,
      log_named_decimal_uintEvent.OutputTuple,
      log_named_decimal_uintEvent.OutputObject
    >;
    log_named_decimal_uint: TypedContractEvent<
      log_named_decimal_uintEvent.InputTuple,
      log_named_decimal_uintEvent.OutputTuple,
      log_named_decimal_uintEvent.OutputObject
    >;

    "log_named_int(string,int256)": TypedContractEvent<
      log_named_intEvent.InputTuple,
      log_named_intEvent.OutputTuple,
      log_named_intEvent.OutputObject
    >;
    log_named_int: TypedContractEvent<
      log_named_intEvent.InputTuple,
      log_named_intEvent.OutputTuple,
      log_named_intEvent.OutputObject
    >;

    "log_named_string(string,string)": TypedContractEvent<
      log_named_stringEvent.InputTuple,
      log_named_stringEvent.OutputTuple,
      log_named_stringEvent.OutputObject
    >;
    log_named_string: TypedContractEvent<
      log_named_stringEvent.InputTuple,
      log_named_stringEvent.OutputTuple,
      log_named_stringEvent.OutputObject
    >;

    "log_named_uint(string,uint256)": TypedContractEvent<
      log_named_uintEvent.InputTuple,
      log_named_uintEvent.OutputTuple,
      log_named_uintEvent.OutputObject
    >;
    log_named_uint: TypedContractEvent<
      log_named_uintEvent.InputTuple,
      log_named_uintEvent.OutputTuple,
      log_named_uintEvent.OutputObject
    >;

    "log_string(string)": TypedContractEvent<
      log_stringEvent.InputTuple,
      log_stringEvent.OutputTuple,
      log_stringEvent.OutputObject
    >;
    log_string: TypedContractEvent<
      log_stringEvent.InputTuple,
      log_stringEvent.OutputTuple,
      log_stringEvent.OutputObject
    >;

    "log_uint(uint256)": TypedContractEvent<
      log_uintEvent.InputTuple,
      log_uintEvent.OutputTuple,
      log_uintEvent.OutputObject
    >;
    log_uint: TypedContractEvent<
      log_uintEvent.InputTuple,
      log_uintEvent.OutputTuple,
      log_uintEvent.OutputObject
    >;

    "logs(bytes)": TypedContractEvent<
      logsEvent.InputTuple,
      logsEvent.OutputTuple,
      logsEvent.OutputObject
    >;
    logs: TypedContractEvent<
      logsEvent.InputTuple,
      logsEvent.OutputTuple,
      logsEvent.OutputObject
    >;
  };
}
