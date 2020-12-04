import React from "react";
import BookmarkIcon from "../../product/bookmark_icon/BookmarkIcon";
import plus from "../../../assets/plus.svg";
import trashbin from "../../../assets/trashbin.svg";
import addToCart from "../../../services/addToCart";

export default function Cart({
  cart,
  productData,
  toggleBookmark,
  bookmarks,
  setCart,
  currentOffer,
}) {
  function getCartImage(productData, cartId) {
    const foundIndex = productData.findIndex((elem) => elem.id === cartId);
    return productData[foundIndex].image;
  }

  console.log(currentOffer);

  return (
    <div>
      {cart.items.length === 0
        ? "Sorry, dein Warenkorb ist leider leer"
        : cart.items.map((cartItem) => (
            <div>
              <div>
                <img src={getCartImage(productData, cartItem.id)} alt="" />
                {console.log(cartItem)}
              </div>
              <div>
                <h1>{cartItem.title}</h1>
                <p>{cartItem.price}</p>
                <p>{cartItem.seller}</p>
              </div>
              <div>
                <BookmarkIcon
                  toggleBookmark={toggleBookmark}
                  id={cartItem.id}
                  bookmarks={bookmarks}
                />
              </div>
              <div>
                <div>
                  <img src={trashbin} alt="" />
                </div>
                <div>{cartItem.amount}</div>
                <div>
                  <img
                    src={plus}
                    onClick={() =>
                      addToCart(
                        productData[cartItem.id],
                        cart,
                        setCart,
                        currentOffer
                      )
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
