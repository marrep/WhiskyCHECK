import "jest-styled-components";
import getProductData from "./getProductData";

describe("getProductData", () => {
  it("should return an array of multipe objects", () => {
    expect(getProductData().length).toBeDefined();
  });
});
