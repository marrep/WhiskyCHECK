import React from "react";
import CartItemController from "./CartItemController";
import CardItemInformation from "./CartItemInformation";
import { CartWrapper, CartWrapperTop } from "./CartStyled";
import CartTotalPrice from "./CartTotalPrice";

export default function Cart({ cart, productData, toggleBookmark, bookmarks }) {
  return (
    <>
      <CartWrapper>
        <CartWrapperTop>
          <span>Mein Warenkorb</span>
        </CartWrapperTop>

        {cart.items.length === 0 ? (
          <p>Sorry, dein Warenkorb ist leider leer"</p>
        ) : (
          cart.items.map((cartItem) => (
            <>
              <CardItemInformation
                cartItem={cartItem}
                productData={productData}
                toggleBookmark={toggleBookmark}
                bookmarks={bookmarks}
              />
              <CartItemController cartItem={cartItem} />
            </>
          ))
        )}
      </CartWrapper>
      {cart.items.length === 0 ? <p></p> : <CartTotalPrice cart={cart} />}
    </>
  );
}
