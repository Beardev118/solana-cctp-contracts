/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Pausable, PausableInterface } from "../Pausable";

const _abi = [
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauser",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePauser",
    inputs: [
      {
        name: "_newPauser",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Pause",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PauserChanged",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpause",
    inputs: [],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60806040526002805460ff60a01b1916905534801561001d57600080fd5b5061002e610029610033565b610037565b6100ae565b3390565b600180546001600160a01b031916905561005b8161005e602090811b6105bb17901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107b8806100bd6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638456cb59116100765780639fd0506d1161005b5780639fd0506d14610142578063e30c39781461014a578063f2fde38b14610152576100a3565b80638456cb59146101095780638da5cb5b14610111576100a3565b80633f4ba83a146100a8578063554bab3c146100b25780635c975abb146100e557806379ba509714610101575b600080fd5b6100b0610185565b005b6100b0600480360360208110156100c857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610248565b6100ed610331565b604080519115158252519081900360200190f35b6100b0610352565b6100b06103f5565b6101196104cf565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101196104eb565b610119610507565b6100b06004803603602081101561016857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610523565b60025473ffffffffffffffffffffffffffffffffffffffff1633146101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806107616022913960400191505060405180910390fd5b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b610250610630565b73ffffffffffffffffffffffffffffffffffffffff81166102bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806107106028913960400191505060405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907fb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a60490600090a250565b60025474010000000000000000000000000000000000000000900460ff1681565b600061035c6106da565b90508073ffffffffffffffffffffffffffffffffffffffff1661037d610507565b73ffffffffffffffffffffffffffffffffffffffff16146103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806107386029913960400191505060405180910390fd5b6103f2816106de565b50565b60025473ffffffffffffffffffffffffffffffffffffffff163314610465576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806107616022913960400191505060405180910390fd5b600280547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b60015473ffffffffffffffffffffffffffffffffffffffff1690565b61052b610630565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556105766104cf565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106386106da565b73ffffffffffffffffffffffffffffffffffffffff166106566104cf565b73ffffffffffffffffffffffffffffffffffffffff16146106d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b565b3390565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690556103f2816105bb56fe5061757361626c653a206e65772070617573657220697320746865207a65726f20616464726573734f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206e6577206f776e65725061757361626c653a2063616c6c6572206973206e6f742074686520706175736572a26469706673582212202c198a821f1f9a7f42279e0c8bddf6393c29b1e4fca6434986379d5089c37a9164736f6c63430007060033";

type PausableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pausable__factory extends ContractFactory {
  constructor(...args: PausableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Pausable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Pausable__factory {
    return super.connect(runner) as Pausable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableInterface {
    return new Interface(_abi) as PausableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pausable {
    return new Contract(address, _abi, runner) as unknown as Pausable;
  }
}
