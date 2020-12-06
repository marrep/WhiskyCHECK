import React from "react";
import plus from "../../../assets/plus.svg";
import trashbin from "../../../assets/trashbin.svg";
import {
  CartItemControllerWrapper,
  CartItemControllerBox,
  CartItemControllerLeftBox,
  CartItemControllerCenterBox,
  CartItemControllerRightBox,
} from "./CartItemControllerStyled";

export default function CartItemController({ cartItem }) {
  return (
    <CartItemControllerWrapper>
      <CartItemControllerBox>
        <CartItemControllerLeftBox>
          <div>
            <img src={trashbin} alt="" />
          </div>
        </CartItemControllerLeftBox>
        <CartItemControllerCenterBox>
          {cartItem.amount}
        </CartItemControllerCenterBox>
        <CartItemControllerRightBox>
          <img src={plus} alt="" />
        </CartItemControllerRightBox>
      </CartItemControllerBox>
    </CartItemControllerWrapper>
  );
}
