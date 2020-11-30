import React from "react";
import { useParams } from "react-router-dom";
import {
  ItemTitleSize,
  ItemPriceRange,
  ItemImage,
  ItemWrapperMain,
  ItemWrapperTop,
  ItemDescription,
} from "./ProductDetailPageStyled";
import BookmarkIcon from "../bookmark_icon/BookmarkIcon";

export default function ProductDetailPage({
  productData,
  toggleBookmark,
  bookmarks,
}) {
  let { id } = useParams();

  return (
    <ItemWrapperMain>
      <ItemWrapperTop>
        <ItemTitleSize>
          {productData[id].title} {productData[id].size} ml
        </ItemTitleSize>
        <BookmarkIcon
          toggleBookmark={toggleBookmark}
          id={id}
          bookmarks={bookmarks}
        />
      </ItemWrapperTop>
      <ItemPriceRange>74,90 - 77,90€</ItemPriceRange>
      <ItemImage src={productData[id].image} alt="" />
      <ItemDescription>{productData[id].description}</ItemDescription>
    </ItemWrapperMain>
  );
}
