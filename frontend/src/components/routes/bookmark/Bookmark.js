import React from "react";
import { BookmarkWrapper } from "./BookmarkStyled";
import BookmarkItem from "../../product/bookmark_item/BookmarkItem";

export default function Bookmark({ bookmarks, deleteBookmark }) {
  return (
    <BookmarkWrapper>
      {bookmarks.map(({ image, id }) => (
        <BookmarkItem
          image={image}
          deleteBookmark={deleteBookmark}
          index={id}
        />
      ))}
    </BookmarkWrapper>
  );
}
