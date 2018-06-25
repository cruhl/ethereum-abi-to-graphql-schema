export type ABI = Array<
  StandardFunction | ConstructorFunction | FallbackFunction | Event
>;

export type StandardFunction = PublicFunction & {
  name: string;
  inputs: FunctionInputOutput[];
  outputs: FunctionInputOutput[];
};

export type ConstructorFunction = PublicFunction & {
  inputs: FunctionInputOutput[];
};

export type FallbackFunction = PublicFunction;

export type FunctionInputOutput = InputOutput;

export interface PublicFunction {
  stateMutability: FunctionStateMutability;
}

export const enum FunctionStateMutability {
  PURE = "pure",
  VIEW = "view",
  NONPAYABLE = "nonpayable",
  PAYABLE = "payable"
}

export interface Event {
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

export const fromJSON = (ABIJSON: object): ABI => {};
