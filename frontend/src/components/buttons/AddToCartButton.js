import React from "react";
import { AddToCartButtonStyled } from "./AddToCartButtonStyled";
import addToCart from "../../services/addToCart";

export default function AddToCartButton({
  product,
  cart,
  setCart,
  AddItem,
  selectedOffer,
}) {
  console.log(product.id);
  console.log(product.price);

  return (
    <AddToCartButtonStyled
      onClick={(event) => AddItem(event, product, cart, setCart, selectedOffer)}
    >
      In den Warenkorb
    </AddToCartButtonStyled>
  );
}
