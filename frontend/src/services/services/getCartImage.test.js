import "jest-styled-components";
import getCartImage from "./getCartImage";

describe("getCartImage", () => {
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
    expect(getCartImage(productData, 2)).toBeTruthy();
  });
  it("should return the same object providing different parameters", () => {
    expect(getCartImage(productData, 1)).not.toEqual(
      getCartImage(productData, 2)
    );
  });
});
