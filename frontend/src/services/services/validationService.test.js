import "jest-styled-components";
import { validateName } from "./validationService";
import { validateEmail } from "./validationService";

describe("validateName", () => {
  it("should return false", () => {
    expect(validateName("M")).not.toBeTruthy();
  });
  it("should return true", () => {
    expect(validateName("Max")).toBeTruthy();
  });
});

describe("validateEmail", () => {
  it("should return false", () => {
    expect(validateEmail("m.de")).not.toBeTruthy();
  });
  it("should return true", () => {
    expect(validateEmail("max@gmx.de")).toBeTruthy();
  });
});
