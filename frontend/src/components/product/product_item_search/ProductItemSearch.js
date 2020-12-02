import React from "react";
import {
  ItemTitle,
  ItemPriceRange,
  ItemOffers,
  ItemOnStock,
  ItemImage,
  ItemWrapper,
  ItemWrapperLeft,
  ItemWrapperCenter,
  ItemWrapperRight,
} from "./ProductItemSearchStyled";
import countOffers from "../../../services/countOffers";
import getPriceRange from "../../../services/getPriceRange";
import getFastestDeliveryDay from "../../../services/getFastestDeliveryDay";
import checkOnStock from "../../../services/checkOnStock";
import BookmarkIcon from "../bookmark_icon/BookmarkIcon";
import Details from "../details_icon/DetailsIcon";

export default function ProductItemSearch({
  title,
  image,
  offers,
  index,
  toggleBookmark,
  bookmarks,
}) {
  return (
    <ItemWrapper>
      <ItemWrapperLeft>
        <ItemImage src={image} alt="" />
      </ItemWrapperLeft>
      <ItemWrapperCenter>
        <ItemTitle>{title}</ItemTitle>
        <ItemOffers>{countOffers(offers)}</ItemOffers>
        <ItemOnStock>{checkOnStock(offers)}</ItemOnStock>
        <ItemPriceRange>{getPriceRange(offers)}</ItemPriceRange>
        <p>{getFastestDeliveryDay(offers)}</p>
      </ItemWrapperCenter>
      <ItemWrapperRight>
        <BookmarkIcon
          toggleBookmark={toggleBookmark}
          id={index}
          bookmarks={bookmarks}
        />
        <Details index={index} />
      </ItemWrapperRight>
    </ItemWrapper>
  );
}
