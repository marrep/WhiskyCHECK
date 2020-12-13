import handleSubmit from "./handleSubmit";
import Summary from "../pages/Summary";
import { render, fireEvent } from "@testing-library/react";

const submitMock = jest.fn();

describe("handleSubmit", () => {
  it("should contain a clickable Button", () => {
    const { getByTestId } = render(
      <Summary
        cart={[]}
        products={[]}
        handleSubmit={handleSubmit}
        orderData={{}}
      />
    );
    const Button = getByTestId("submitButton");
    fireEvent.click(Button);
    expect(submitMock).toHaveBeenCalled();
  });
});
