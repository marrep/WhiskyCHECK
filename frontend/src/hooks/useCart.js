import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalShipping: 0,
    date: new Intl.DateTimeFormat("en-US").format(new Date()),
    customerid: 2,
  });

  function addToCart(product, selectedOffer) {
    console.log(selectedOffer);
    let newItemsArray = cart.items;
    const foundIndex = newItemsArray.findIndex(
      (elem) => elem.id === product.id
    );
    const foundOffer = newItemsArray.some(
      (elem) => elem.id === product.id && elem.seller === selectedOffer.seller
    );
    console.log(newItemsArray);
    console.log(selectedOffer);
    if (!foundOffer) {
      newItemsArray.push({
        id: product.id,
        title: product.title,
        price: selectedOffer.price,
        amount: 1,
        shippingPrice: selectedOffer.shippingPrice,
        seller: selectedOffer.seller,
      });
    } else {
      newItemsArray[foundIndex].amount += 1;
    }

    setCart({
      ...cart,
      items: newItemsArray,
      totalPrice: cart.totalPrice + selectedOffer.price,
      totalShipping: !foundOffer
        ? cart.totalShipping + selectedOffer.shippingPrice
        : cart.totalShipping,
    });
  }

  return {
    cart,
    addToCart,
  };
}
