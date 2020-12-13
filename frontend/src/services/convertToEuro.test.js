import "jest-styled-components";
import convertToEuro from "./convertToEuro";

describe("convertToEuro", () => {
  it("should convert float to Euro", () => {
    const number = 17.5;
    expect(convertToEuro(number)).toBeTruthy();
    expect(convertToEuro(number)).toBeDefined();
  });
});
