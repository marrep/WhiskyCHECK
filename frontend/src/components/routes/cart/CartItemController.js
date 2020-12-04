import React from "react";
import plus from "../../../assets/plus.svg";
import trashbin from "../../../assets/trashbin.svg";

export default function CartItemController({ cartItem }) {
  return (
    <div>
      <div>
        <img src={trashbin} alt="" />
      </div>
      <div>{cartItem.amount}</div>
      <div>
        <img src={plus} onClick={() => (cartItem.amount += 1)} alt="" />
      </div>
    </div>
  );
}
