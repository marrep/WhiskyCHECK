import React from "react";
import CartItemController from "../../components/cart/CartItemController";
import CardItem from "../../components/cart/CartItem";
import styled from "styled-components";
import CartTotalPrice from "../../components/cart/CartTotalPrice";
import { Link } from "react-router-dom";

export default function Cart({ cart, products, toggleBookmark, bookmarks }) {
  return (
    <>
      <CartWrapper>
        <CartWrapperTop>
          <span>Mein Warenkorb</span>
        </CartWrapperTop>

        {cart.items.length === 0 ? (
          <p>Sorry, dein Warenkorb ist leider leer</p>
        ) : (
          cart.items.map((cartItem) => (
            <>
              <CardItem
                cartItem={cartItem}
                products={products}
                toggleBookmark={toggleBookmark}
                bookmarks={bookmarks}
              />
              <CartItemController cartItem={cartItem} cart={cart} />
            </>
          ))
        )}
        <CartTotalPrice cart={cart} />
        <CheckoutButtonWrapper
          style={{ display: cart.items.length === 0 ? "none" : "block" }}
        >
          <StyledLink to="./checkout">
            <CheckoutButtonStyled>Zur Kasse</CheckoutButtonStyled>
          </StyledLink>
        </CheckoutButtonWrapper>
      </CartWrapper>
    </>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const CartWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

export const CartWrapperTop = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #dadbdc;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

export const CheckoutButtonWrapper = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`;

export const CheckoutButtonStyled = styled.button`
  display: block;
  width: 80%;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
