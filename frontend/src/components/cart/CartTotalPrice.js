import { convertToEuro } from "../../services/helpers";
import CheckoutButton from "../../components/buttons/CheckoutButton";
import styled from "styled-components";

export default function CartTotalPrice({ cart }) {
  console.log(cart);

  return (
    <>
      <CartTotalPriceWrapper
        style={{ display: cart.items.length === 0 ? "none" : "block" }}
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
        <CheckoutButton />
      </CartTotalPriceWrapper>
    </>
  );
}

export const CartTotalPriceWrapper = styled.div`
  font-family: Lato;
  color: #4a4a4a;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CartTotalPriceWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  padding: 10px;
  width: 70%;
`;

export const CartTotalPriceWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Left;
  text-align: left;
  padding: 10px;
  width: 30%;
`;
