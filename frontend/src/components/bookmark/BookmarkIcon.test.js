import "jest-styled-components";
import BookmarkIcon from "./BookmarkIcon";
import { render } from "@testing-library/react";

const bookmarkMock = jest.fn();

describe("BookmarkIcon", () => {
  it("should render correctly", () => {
    const { container, getByText } = render(
      <BookmarkIcon
        id={1}
        toggleBookmark={bookmarkMock}
        bookmarks={[
          {
            image: "",
            id: 1,
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText("Merken")).toBeTruthy();
  });
  it("should have a defined bookmark icon", () => {
    const { getByTestId } = render(
      <BookmarkIcon
        id={1}
        toggleBookmark={bookmarkMock}
        bookmarks={[
          {
            image: "",
            id: 1,
          },
        ]}
      />
    );
    const element = getByTestId("bookmarkIcon");
    expect(element).toBeDefined();
  });
});
