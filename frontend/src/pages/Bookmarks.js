import BookmarkItem from "../components/bookmark/BookmarkItem";
import React from "react";
import styled from "styled-components";
import useBookmarks from "../hooks/useBookmarks";

export default function Bookmark() {
  const { deleteBookmark, bookmarks } = useBookmarks();

  return (
    <MainWrapper>
      <TopWrapper>
        <span>Meine Favoriten</span>
      </TopWrapper>

      {bookmarks.length === 0 ? (
        <p>Oh, Du hast noch keine Artikel markiert!</p>
      ) : (
        bookmarks.map(({ image, id }) => (
          <BookmarkItem image={image} deleteBookmark={deleteBookmark} id={id} />
        ))
      )}
    </MainWrapper>
  );
}

export const MainWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

export const TopWrapper = styled.div`
  border-bottom: 1px solid #dadbdc;
  display: block;
  padding: 10px;
  width: 100%;

  span {
    color: #003f8a;
    font-family: Lato;
    font-size: 15px;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;
