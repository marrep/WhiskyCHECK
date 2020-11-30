import React from "react";
import { BookmarkWrapper } from "./BookmarkStyled";
import ProductItemBookmark from "../../product/product_item_bookmark/ProductItemBookmark";

export default function Bookmark({ bookmarks, deleteBookmark }) {
  return (
    <BookmarkWrapper>
      {bookmarks.length === 0
        ? "Oh, Du hast noch keine Artikel markiert!"
        : bookmarks.map(({ image, id }) => (
            <ProductItemBookmark
              image={image}
              deleteBookmark={deleteBookmark}
              index={id}
            />
          ))}
    </BookmarkWrapper>
  );
}
