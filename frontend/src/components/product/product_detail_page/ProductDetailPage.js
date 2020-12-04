import React from "react";
import { useState } from "react";
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
import AddToCartButton from "../../buttons/AddToCartButton";

export default function ProductDetailPage({
  productData,
  toggleBookmark,
  bookmarks,
  cart,
  setCart,
}) {
  let { id } = useParams();

  // function checkAvailability(selectedOffer) {
  //   if (selectedOffer.onStock) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // function calculateCosts(amount, selectedOffer) {}

  // function upDateCard(amount, price, shipping, currentItemsArray) {

  // }

  function AddItem(event, product, cart, setCart, selectedOffer) {
    let newItemsArray = cart.items;
    const foundIndex = newItemsArray.findIndex(
      (elem) => elem.id === product.id
    );
    console.log(foundIndex);
    if (foundIndex === -1) {
      newItemsArray.push({
        id: product.id,
        title: product.title,
        price: selectedOffer.price,
        amount: 1,
        shippingPrice: selectedOffer.shippingPrice,
        seller: selectedOffer.seller,
      });
    } else {
      newItemsArray[foundIndex].amount += 1;
    }

    setCart({
      ...cart,
      items: newItemsArray,
      totalPrice: cart.totalPrice + selectedOffer.price,
      totalShipping:
        foundIndex === -1
          ? cart.totalShipping + selectedOffer.shippingPrice
          : cart.totalShipping,
    });

    console.log(cart);
  }

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
        AddItem={AddItem}
      />
      <ItemDescription>
        <strong>Beschreibung:</strong> {productData[id].description}
      </ItemDescription>
    </ItemWrapperMain>
  );
}
