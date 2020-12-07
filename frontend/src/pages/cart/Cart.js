import React from "react";
import CartItemController from "../../components/cart/CartItemController";
import CardItemInformation from "../../components/cart/CartItemInformation";
import styled from "styled-components";
import CartTotalPrice from "../../components/cart/CartTotalPrice";

export default function Cart({ cart, products, toggleBookmark, bookmarks }) {
  console.log(cart.items.length);
  console.log(cart);
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
              <CardItemInformation
                cartItem={cartItem}
                products={products}
                toggleBookmark={toggleBookmark}
                bookmarks={bookmarks}
              />
              <CartItemController cartItem={cartItem} cart={cart} />
            </>
          ))
        )}
      </CartWrapper>
      <CartTotalPrice cart={cart} />
    </>
  );
}

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
