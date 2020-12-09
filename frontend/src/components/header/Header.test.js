import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Header>Your Favourites</Header>);
    expect(getByText(/Your Favourites/i)).toBeInTheDocument();
  });
});
