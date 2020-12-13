import "jest-styled-components";
import countOffers from "./countOffers";

describe("countOffers", () => {
  it("should count the amount of offers correctly", () => {
    const offersData = [
      {
        test: test,
      },
      { test: test },
    ];
    expect(countOffers(offersData)).toEqual("2 Angebote");
    expect(countOffers(offersData)).not.toEqual(3);
  });
});
