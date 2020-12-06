import React from "react";
import useCart from "../../hooks/useCart";
import styled from "styled-components";

export default function AddToCartButton({ product, selectedOffer }) {
  const { addToCart } = useCart();

  return (
    <AddToCartButtonStyled onClick={() => addToCart(product, selectedOffer)}>
      In den Warenkorb
    </AddToCartButtonStyled>
  );
}

export const AddToCartButtonStyled = styled.button`
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 40px;
  width: 100%;
  padding: 1em 5em;
  text-transform: uppercase;
  background-color: #003f8a;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
