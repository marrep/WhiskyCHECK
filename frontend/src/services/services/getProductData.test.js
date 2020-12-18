import "jest-styled-components";
import getProductData from "./getProductData";

describe("getProductData", () => {
  it("fetches correctly", () => {
    expect(getProductData()).not.toBe(null);
  });
});
