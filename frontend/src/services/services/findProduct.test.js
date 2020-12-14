import "jest-styled-components";
import findProduct from "./findProduct";

describe("findProduct", () => {
  const productData = [
    {
      id: 1,
      image: "test1.jpg",
    },
    {
      id: 2,
      image: "test2.jpg",
    },
  ];
  it("should always return something", () => {
    expect(findProduct(1, productData)).toBeTruthy();
  });
  it("should always return at an object", () => {
    expect(findProduct(1, productData)).not.toEqual([]);
  });
  it("should return the same object providing different parameters", () => {
    expect(findProduct(1, productData)).not.toEqual(
      findProduct(2, productData)
    );
  });
});
