import "jest-styled-components";
import checkOnStock from "./checkOnStock";

describe("checkOnStock", () => {
  it("should return the correct boolean", () => {
    const offersData = [
      {
        onStock: true,
      },
    ];
    expect(checkOnStock(offersData)).toEqual("Auf Lager.");
    expect(checkOnStock(offersData)).not.toEqual("Leider nicht verfügbar.");
  });
});
