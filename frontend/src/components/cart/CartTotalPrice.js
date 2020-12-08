import { convertToEuro } from "../../services/helpers";
import styled from "styled-components";

export default function CartTotalPrice({ cart }) {
  return (
    <>
      <CartTotalPriceWrapper
        style={{ display: cart.items.length === 0 ? "none" : "flex" }}
      >
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
    </>
  );
}

export const CartTotalPriceWrapper = styled.div`
  font-family: Lato;
  color: #4a4a4a;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const CartTotalPriceWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  padding: 10px;
  width: 60%;
`;

export const CartTotalPriceWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Left;
  text-align: left;
  padding: 10px;
  width: 40%;
`;
