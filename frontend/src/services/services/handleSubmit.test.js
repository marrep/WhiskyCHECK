import handleSubmit from "./handleSubmit";
import { Summary } from "../../pages/pages";
import { render } from "@testing-library/react";

const testProps = {
  items: [],
  totalPrice: 0,
  totalShipping: 0,
  date: new Intl.DateTimeFormat("en-US").format(new Date()),
  customerid: 2,
};

describe("handleSubmit", () => {
  it("should contain a clickable Button", () => {
    const { getByTestId } = render(
      <Summary
        cart={testProps}
        products={[]}
        handleSubmit={handleSubmit}
        orderData={testProps}
      />
    );
    const button = getByTestId("submitButton");
    expect(button).toBeTruthy();
  });
});
