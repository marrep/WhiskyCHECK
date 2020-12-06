import React from "react";
import styled from "styled-components";
import BookmarkItem from "../../components/bookmark/BookmarkItem";

export default function Bookmark({ deleteBookmark, bookmarks }) {
  return (
    <BookmarkWrapper>
      <BookmarkWrapperTop>
        <span>Meine Favoriten</span>
      </BookmarkWrapperTop>

      {bookmarks.length === 0 ? (
        <p>Oh, Du hast noch keine Artikel markiert!</p>
      ) : (
        bookmarks.map(({ image, id }) => (
          <BookmarkItem image={image} deleteBookmark={deleteBookmark} id={id} />
        ))
      )}
    </BookmarkWrapper>
  );
}

export const BookmarkWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

export const BookmarkWrapperTop = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #dadbdc;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;
