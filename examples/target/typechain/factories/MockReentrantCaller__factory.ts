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
import type {
  MockReentrantCaller,
  MockReentrantCallerInterface,
} from "../MockReentrantCaller";

const _abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "handleReceiveMessage",
    inputs: [
      {
        name: "_sourceDomain",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_sender",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_messageBody",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMessageAndSignature",
    inputs: [
      {
        name: "_message",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a01806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063695e52b01461003b57806396abeb701461016a575b600080fd5b6101686004803603604081101561005157600080fd5b81019060208101813564010000000081111561006c57600080fd5b82018360208201111561007e57600080fd5b803590602001918460018302840111640100000000831117156100a057600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156100f357600080fd5b82018360208201111561010557600080fd5b8035906020019184600183028401116401000000008311171561012757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610236945050505050565b005b6102226004803603606081101561018057600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156101ad57600080fd5b8201836020820111156101bf57600080fd5b803590602001918460018302840111640100000000831117156101e157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610262945050505050565b604080519115158252519081900360200190f35b8151610249906000906020850190610900565b50805161025d906001906020840190610900565b505050565b60408051808201909152600681527f72657665727400000000000000000000000000000000000000000000000000006020918201528151908201206000907fa6de185cadd5025ad112692ff4c6e4d195daa4aeca2980b12e73362933d065f2141561032e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f6d6f636b20726576657274000000000000000000000000000000000000000000604482015290519081900360640190fd5b60408051808201909152600781527f7265656e746572000000000000000000000000000000000000000000000000006020918201528251908301207f331ae87d35d8033ce9e8c67053f3d293c8c4520090bc136942577830697e2f4614156106be5760007f57ecfd2877a009c9ecce5477ab5a9b333b48e35d1a864d8e66c031999eaa4d22600060016040516024018080602001806020018381038352858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104475780601f1061041c57610100808354040283529160200191610447565b820191906000526020600020905b81548152906001019060200180831161042a57829003601f168201915b50508381038252845460027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001841615020190911604808252602090910190859080156104d95780601f106104ae576101008083540402835291602001916104d9565b820191906000526020600020905b8154815290600101906020018083116104bc57829003601f168201915b5050604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909916989098178852518151919850600097889750339650899550909350839250908083835b602083106105b157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610574565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610613576040519150601f19603f3d011682016040523d82523d6000602084013e610618565b606091505b5091509150610664610629826106c5565b6040518060400160405280601281526020017f4e6f6e636520616c7265616479207573656400000000000000000000000000008152506107dd565b156106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806109a2602a913960400191505060405180910390fd5b5050505b9392505050565b606060448251101561070b575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201526107d8565b600482018051909260240190602081101561072557600080fd5b810190808051604051939291908464010000000082111561074557600080fd5b90830190602082018581111561075a57600080fd5b825164010000000081118282018810171561077457600080fd5b82525081516020918201929091019080838360005b838110156107a1578181015183820152602001610789565b50505050905090810190601f1680156107ce5780820380516001836020036101000a031916815260200191505b5060405250505090505b919050565b6000816040516020018082805190602001908083835b6020831061083057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016107f3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b602083106108bc57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161087f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610936576000855561097c565b82601f1061094f57805160ff191683800117855561097c565b8280016001018555821561097c579182015b8281111561097c578251825591602001919060010190610961565b5061098892915061098c565b5090565b5b80821115610988576000815560010161098d56fe52652d656e7472616e742063616c6c206661696c65642064756520746f20726575736564206e6f6e6365a2646970667358221220424e7bce13f2033ef60df574ec5b1e655345435bfd3a5aff6b43e8c35bdb300664736f6c63430007060033";

type MockReentrantCallerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockReentrantCallerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockReentrantCaller__factory extends ContractFactory {
  constructor(...args: MockReentrantCallerConstructorParams) {
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
      MockReentrantCaller & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockReentrantCaller__factory {
    return super.connect(runner) as MockReentrantCaller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReentrantCallerInterface {
    return new Interface(_abi) as MockReentrantCallerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockReentrantCaller {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockReentrantCaller;
  }
}