import * as Solc from "solc";
import * as GraphQL from "graphql";

describe("translating Solidity ABI into GraphQL schema AST", () => {
  test("resulting AST can be printed into GraphQL IDL source code", () => {
    const ABI = soliditiyToABI(`
			contract Test {
				function x() {}
			}
    `);

    const schemaAST = graphQLToAST;

    console.log(ABI);
  });
});

const soliditiyToABI = (soliditySource: string): Solc.ABI => {
  const { contracts } = Solc.compile(soliditySource, 1);
  const {
    interface: { abi: ABI }
  } = Object.values(contracts)[0];

  return ABI as Solc.ABI;
};
