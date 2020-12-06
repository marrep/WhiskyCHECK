import React from "react";
import {
  CheckoutButtonStyled,
  CheckoutButtonWrapper,
} from "./CheckoutButtonStyled";

export default function CheckoutButton() {
  return (
    <CheckoutButtonWrapper>
      <CheckoutButtonStyled>Zur Kasse</CheckoutButtonStyled>
    </CheckoutButtonWrapper>
  );
}
