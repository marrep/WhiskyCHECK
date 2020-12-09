import BookmarkItem from "./BookmarkItem";
import { render, fireEvent } from "@testing-library/react";

const itemMock = jest.fn();

describe("BookmarkItem", () => {
  it("should contain a clickable Button", () => {
    const { getByTestId } = render(
      <BookmarkItem image={""} deleteBookmark={itemMock} id={1} />
    );
    const Button = getByTestId("deleteButton");
    fireEvent.click(Button);
    expect(itemMock).toHaveBeenCalled();
  });
});
