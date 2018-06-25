import * as ABI from "./ABI";

describe("parsing ABI JSON into ABI types", () => {
  test("are things working?", () => {
    const ABIObject = [{}];

    expect(ABI.fromJSON()).not.toBeUndefined();
  });
});
