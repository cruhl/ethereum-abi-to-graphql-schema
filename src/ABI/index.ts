export type ContractDescription = Array<FunctionDescription | EventDescription>;

export interface FunctionDescription {
  type: "function";
  name: string;
  inputs: FunctionInputOutput[];
  outputs: FunctionInputOutput[];
  payable: true;
  stateMutability: FunctionStateMutability;
  constant: true;
}

export type FunctionInputOutput = InputOutput;

export const enum FunctionStateMutability {
  PURE = "pure",
  VIEW = "view",
  NONPAYABLE = "nonpayable",
  PAYABLE = "payable"
}

export interface EventDescription {
  type: "event";
  name: string;
  inputs: EventInputOutput[];
  anonymous: true;
}

export type EventInputOutput = InputOutput & {
  indexed: boolean;
};

export interface InputOutput {
  name: string;
  type: string;
  components?: InputOutput[];
}
