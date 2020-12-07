import React from "react";
import plus from "../../assets/icons/plus.svg";
import trashbin from "../../assets/icons/trashbin.svg";
import styled from "styled-components";
import useCart from "../../hooks/useCart";

export default function CartItemController({ cartItem, cart }) {
  const { increaseAmount, removeFromCart } = useCart();

  return (
    <CartItemControllerWrapper>
      <CartItemControllerBox>
        <CartItemControllerLeftBox
          onClick={() => removeFromCart(cartItem, cart)}
        >
          <div>
            <img src={trashbin} alt="" />
          </div>
        </CartItemControllerLeftBox>
        <CartItemControllerCenterBox>
          {cartItem.amount}
        </CartItemControllerCenterBox>
        <CartItemControllerRightBox
          onClick={() => increaseAmount(cartItem, cart)}
        >
          <img src={plus} alt="" />
        </CartItemControllerRightBox>
      </CartItemControllerBox>
    </CartItemControllerWrapper>
  );
}

export const CartItemControllerWrapper = styled.div`
  font-family: Lato;
  display: block;
  width: 100%;
  padding: 10px 25px;
`;

export const CartItemControllerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #575757;
  border-radius: 5px;
  width: 20%;
`;

export const CartItemControllerLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  width: 30%;
`;

export const CartItemControllerCenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const CartItemControllerRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  width: 30%;
`;
