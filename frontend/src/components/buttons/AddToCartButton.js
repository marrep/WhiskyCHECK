import React from "react";
import { AddToCartButtonStyled } from "./AddToCartButtonStyled";
import addToCart from "../../services/addToCart";

export default function AddToCartButton({
  product,
  cart,
  setCart,
  selectedOffer,
  setToggleAvailability,
}) {
  function checkAvailability(selectedOffer) {
    if (selectedOffer.onStock) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AddToCartButtonStyled
      onClick={() =>
        checkAvailability(selectedOffer)
          ? addToCart(product, cart, setCart, selectedOffer)
          : setToggleAvailability("Sorry, dieser Artikel ist nicht Verfügbar!")
      }
    >
      In den Warenkorb
    </AddToCartButtonStyled>
  );
}
