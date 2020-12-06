import React from "react";
import getCartImage from "../../../services/getCardImage";
import {
  CartItemWrapper,
  CartItemWrapperLeft,
  CartItemWrapperCenter,
  CartItemWrapperRight,
  CartItemSeller,
  CartItemTitle,
  CartItemPrice,
} from "./CartItemInformationStyled";
import BookmarkIcon from "../../product/bookmark_icon/BookmarkIcon";

export default function CartItemInformation({
  cartItem,
  productData,
  toggleBookmark,
  bookmarks,
}) {
  return (
    <CartItemWrapper>
      <CartItemWrapperLeft>
        <img src={getCartImage(productData, cartItem.id)} alt="" />
      </CartItemWrapperLeft>
      <CartItemWrapperCenter>
        <CartItemPrice>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(cartItem.price)}
        </CartItemPrice>
        <CartItemTitle>{cartItem.title}</CartItemTitle>
        <CartItemSeller>Versand durch {cartItem.seller}</CartItemSeller>
      </CartItemWrapperCenter>
      <CartItemWrapperRight>
        <BookmarkIcon
          toggleBookmark={toggleBookmark}
          id={productData.findIndex((elem) => elem.id === cartItem.id)}
          bookmarks={bookmarks}
        />
      </CartItemWrapperRight>
    </CartItemWrapper>
  );
}
