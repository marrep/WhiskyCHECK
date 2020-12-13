import "jest-styled-components";
import handleCheckout from "./handleCheckout";

describe("handleCheckout", () => {
  const orderData = {
    name: "Marcel",
    surname: "Reperich",
    email: "papst30@hotmail.de",
  };
  it("should not return an alert", () => {
    expect(handleCheckout(orderData, {})).toBeTruthy();
  });
});
