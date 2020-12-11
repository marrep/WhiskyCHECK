import { useState, useEffect } from "react";
import loadLocally from "../lib/loadLocally";
import saveLocally from "../lib/saveLocally";

export default function useCart() {
  const [cart, setCart] = useState(
    loadLocally("cart") ?? {
      items: [],
      totalPrice: 0,
      totalShipping: 0,
      date: new Intl.DateTimeFormat("en-US").format(new Date()),
      customerid: 2,
    }
  );

  useEffect(() => {
    saveLocally("cart", cart);
  }, [cart]);

  return {
    cart,
    addToCart,
    increaseAmount,
    removeFromCart,
  };

  function addToCart(product, selectedOffer) {
    let newItemsArray = Object.assign([], cart.items);
    const foundIndex = newItemsArray.findIndex(
      (elem) => elem.id === product.id
    );
    const foundOffer = newItemsArray.some(
      (elem) => elem.id === product.id && elem.seller === selectedOffer.seller
    );
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

  function increaseAmount(cartItem) {
    const index = cart.items.findIndex(
      (elem) => elem.id === cartItem.id && elem.seller === cartItem.seller
    );
    const newItemsArray = [
      ...cart.items.slice(0, index),
      { ...cart.items[index], amount: (cart.items[index].amount += 1) },
      ...cart.items.slice(index + 1),
    ];
    const newCart = {
      ...cart,
      items: newItemsArray,
      totalPrice: (cart.totalPrice += cartItem.price),
    };
    setCart(newCart);
  }

  function removeFromCart(cartItem, cart) {
    const index = cart.items.findIndex(
      (elem) => elem.id === cartItem.id && elem.seller === cartItem.seller
    );
    const newList = cart.items.filter((item) => item.id !== cartItem.id);
    cart.items[index].amount < 1
      ? setCart({
          ...(cart.items = newList),
        })
      : setCart({
          ...(cart.items[index].amount -= 1),
          ...(cart.totalPrice -= cartItem.price),
        });
  }
}
