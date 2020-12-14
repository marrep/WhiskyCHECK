import "jest-styled-components";
import { Checkout } from "../../pages/pages";
import { render } from "@testing-library/react";
import { saveLocally } from "../../lib/localStorage";

const testFunc = jest.fn();
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const testCart = {
  items: [],
};

const orderData = {
  name: "Marcel",
  surname: "Reperich",
  email: "papst30@hotmail.de",
};

saveLocally("orderData", orderData);

describe("handleCheckout", () => {
  it("should contain a clickable Button", () => {
    const { getByTestId } = render(
      <Checkout
        cart={testCart}
        products={[]}
        handleCheckout={testFunc}
        orderData={orderData}
        setOrderData={testFunc}
      />
    );

    const button = getByTestId("checkoutButton");
    expect(button).toBeTruthy();
  });
});
