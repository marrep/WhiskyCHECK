import { Link } from "react-router-dom";
import CardItem from "../components/cart/CartItem";
import CartItemController from "../components/cart/CartItemController";
import CartTotalPrice from "../components/cart/CartTotalPrice";
import React from "react";
import styled from "styled-components";

export default function Cart({
  cart,
  products,
  toggleBookmark,
  bookmarks,
  removeFromCart,
  increaseAmount,
}) {
  return (
    <>
      <MainWrapper>
        <TopWrapper>
          <span>Mein Warenkorb</span>
          {JSON.stringify(cart)}
        </TopWrapper>
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
              <CartItemController
                cartItem={cartItem}
                cart={cart}
                removeFromCart={removeFromCart}
                increaseAmount={increaseAmount}
              />
            </>
          ))
        )}
        <CartTotalPrice cart={cart} />
        <ButtonWrapper
          style={{ display: cart.items.length === 0 ? "none" : "block" }}
        >
          <StyledLink to="./checkout">
            <CheckoutButton>Zur Kasse</CheckoutButton>
          </StyledLink>
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const MainWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

const TopWrapper = styled.div`
  border-bottom: 1px solid #dadbdc;
  display: block;
  padding: 10px;
  width: 100%;

  span {
    color: #003f8a;
    font-family: Lato;
    font-size: 15px;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

const ButtonWrapper = styled.div`
  display: block;
  text-align: center;
  width: 100%;
`;

const CheckoutButton = styled.button`
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  display: block;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  width: 80%;
`;
