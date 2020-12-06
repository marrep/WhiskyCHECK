import React from "react";
import { BookmarkWrapper, BookmarkWrapperTop } from "./BookmarkStyled";
import ProductItemBookmark from "../../product/product_item_bookmark/ProductItemBookmark";

export default function Bookmark({ bookmarks, deleteBookmark }) {
  return (
    <BookmarkWrapper>
      <BookmarkWrapperTop>
        <span>Meine Favoriten</span>
      </BookmarkWrapperTop>

      {bookmarks.length === 0 ? (
        <p>Oh, Du hast noch keine Artikel markiert!</p>
      ) : (
        bookmarks.map(({ image, id }) => (
          <ProductItemBookmark
            image={image}
            deleteBookmark={deleteBookmark}
            index={id}
          />
        ))
      )}
    </BookmarkWrapper>
  );
}
