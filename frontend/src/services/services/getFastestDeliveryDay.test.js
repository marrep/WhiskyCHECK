import "jest-styled-components";
import getFastestDeliveryDay from "./getFastestDeliveryDay";

describe("getFastestDeliveryDay", () => {
  const offers = [
    {
      deliveryTime: 2,
    },
    {
      deliveryTime: 3,
    },
  ];
  it("should always return something", () => {
    expect(getFastestDeliveryDay(offers)).toBeTruthy();
  });
});
