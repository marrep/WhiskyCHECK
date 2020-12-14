import "jest-styled-components";
import getDeliveryDay from "./getDeliveryDay";

describe("getDeliveryDay", () => {
  it("should always return something", () => {
    expect(getDeliveryDay(2)).toBeTruthy();
  });
  it("should return the correct string", () => {
    expect(getDeliveryDay(2)).toEqual(expect.stringContaining("Lieferung bis"));
  });
});
