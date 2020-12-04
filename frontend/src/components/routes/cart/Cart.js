import React from "react";
import BookmarkIcon from "../../product/bookmark_icon/BookmarkIcon";
import CartItemController from "./CartItemController";
import CardItemInformation from "./CartItemInformation";

export default function Cart({
  cart,
  productData,
  toggleBookmark,
  bookmarks,
  setCart,
}) {
  return (
    <div>
      {cart.items.length === 0
        ? "Sorry, dein Warenkorb ist leider leer"
        : cart.items.map((cartItem) => (
            <div>
              <CardItemInformation
                cartItem={cartItem}
                productData={productData}
              />
              <div>
                <BookmarkIcon
                  toggleBookmark={toggleBookmark}
                  id={productData.findIndex((elem) => elem.id === cartItem.id)}
                  bookmarks={bookmarks}
                />
              </div>
              <CartItemController cartItem={cartItem} />
            </div>
          ))}
    </div>
  );
}
