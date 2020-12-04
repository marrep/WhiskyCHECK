import React from "react";
import getCartImage from "../../../services/getCardImage";

export default function CartItemController({ cartItem, productData }) {
  return (
    <>
      <div>
        <img src={getCartImage(productData, cartItem.id)} alt="" />
      </div>
      <div>
        <h1>{cartItem.title}</h1>
        <p>{cartItem.price}</p>
        <p>{cartItem.seller}</p>
      </div>
    </>
  );
}
