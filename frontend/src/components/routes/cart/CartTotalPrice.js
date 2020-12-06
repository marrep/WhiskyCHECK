import React from "react";
import {
  CartTotalPriceWrapper,
  CartTotalPriceWrapperLeft,
  CartTotalPriceWrapperRight,
} from "./CartTotalPriceStyled";
import convertToEuro from "../../../services/convertToEuro";
import CheckoutButton from "../../buttons/CheckoutButton";

export default function CartTotalPrice({ cart }) {
  return (
    <>
      <CartTotalPriceWrapper>
        <CartTotalPriceWrapperLeft>
          <span>Zwischensumme:</span>
          <span>Versand:</span>
          <span>Summe:</span>
        </CartTotalPriceWrapperLeft>
        <CartTotalPriceWrapperRight>
          <span>{convertToEuro(cart.totalPrice)}</span>
          <span>{convertToEuro(cart.totalShipping)}</span>
          <span>{convertToEuro(cart.totalPrice + cart.totalShipping)}</span>
        </CartTotalPriceWrapperRight>
      </CartTotalPriceWrapper>
      <CheckoutButton />
    </>
  );
}
