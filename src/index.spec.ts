import * as Solc from "solc";
import * as GraphQL from "graphql";

import * as Abi from "./Types/Abi";

describe("translating contract ABI into GraphQL schema AST", () => {
  test("translates a trivial function", () => {
    expectSchemasToMatch(
      `
contract A {
  function x() returns (string) {}
}

`,
      `
type Query {
  x: String!
}

`
    );
  });
});

const expectSchemasToMatch = (soliditySource: string, graphQLSource: string) =>
  expect(Abi.toGraphQLSchema(solidityToAbi(soliditySource))).toEqual(
    GraphQL.parse(graphQLSource, { noLocation: true })
  );

const solidityToAbi = (soliditySource: string): Abi.Abi => {
  const contract = Object.values(Solc.compile(soliditySource, 1))[0];
  return Abi.fromJson(contract.interface as object);
};
