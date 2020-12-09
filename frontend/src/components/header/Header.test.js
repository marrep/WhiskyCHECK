import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("contains an image", () => {
    const { container, getByAltText } = render(<Header></Header>);
    expect(container.firstChild).toMatchSnapshot();
    expect(getByAltText("WhiskyCheck Logo")).toBeTruthy();
  });
});
