import React from "react";
import {
  BookmarkItemWrapper,
  BookmarkItemWrapperLeft,
  BookmarkItemWrapperRight,
  BookmarkItemWrapperCenter,
} from "./ProductItemBookmarkStyled";
import close from "../../../assets/close.svg";
import BookmarkBuyButton from "../../buttons/BookmarkBuyButton";

export default function BookmarkItem({ image, deleteBookmark, index }) {
  return (
    <BookmarkItemWrapper>
      <BookmarkItemWrapperLeft>
        <img src={image} alt="" />
      </BookmarkItemWrapperLeft>
      <BookmarkItemWrapperCenter>
        <BookmarkBuyButton />
      </BookmarkItemWrapperCenter>
      <BookmarkItemWrapperRight>
        <img src={close} alt="" onClick={() => deleteBookmark(index)} />
      </BookmarkItemWrapperRight>
    </BookmarkItemWrapper>
  );
}
