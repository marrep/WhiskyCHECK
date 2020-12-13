import "jest-styled-components";
import getPriceRange from "./getPriceRange";

describe("getPriceRange", () => {
  const offers = [
    {
      price: 17.5,
    },
    {
      price: 18.5,
    },
  ];
  it("should always return something", () => {
    expect(getPriceRange(offers)).toBeTruthy();
  });
  it("should not return an array or an object", () => {
    expect(getPriceRange(offers)).not.toBe([]);
    expect(getPriceRange(offers)).not.toBe({});
  });
  it("should return a price range", () => {
    expect(getPriceRange(offers)).toEqual("17,50 € - 18,50 €");
  });
});
