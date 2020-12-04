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
import getPriceRange from "../../../services/getPriceRange";
import OfferDetails from "../product_offer_details/OfferDetails";

export default function ProductDetailPage({
  productData,
  toggleBookmark,
  bookmarks,
  cart,
  setCart,
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
      <ItemPriceRange>{getPriceRange(productData[id].offers)}</ItemPriceRange>
      <ItemImage src={productData[id].image} alt="" />
      <OfferDetails
        offerDetails={productData[id].offers}
        product={productData[id]}
        cart={cart}
        setCart={setCart}
      />
      <ItemDescription>
        <strong>Beschreibung:</strong> {productData[id].description}
      </ItemDescription>
    </ItemWrapperMain>
  );
}
