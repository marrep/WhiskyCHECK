import { useState, useEffect } from "react";
import { loadLocally, saveLocally } from "../../lib/localStorage";

const STORAGE_KEY = "cart";

export default function useCart() {
  const [cart, setCart] = useState({
    items:
      localStorage.getItem("cart") !== null ? loadLocally("cart").items : [],
    totalPrice:
      localStorage.getItem("cart") !== null
        ? loadLocally("cart").totalPrice
        : 0,
    totalShipping:
      localStorage.getItem("cart") !== null
        ? loadLocally("cart").totalShipping
        : 0,
    date: new Intl.DateTimeFormat("en-US").format(new Date()),
    customerid: 2,
  });

  console.log(cart);
  console.log(loadLocally("cart"));

  useEffect(() => {
    saveLocally(STORAGE_KEY, cart);
  }, [cart]);

  return {
    cart,
    addToCart,
    increaseAmount,
    decreaseAmount,
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
      totalPrice:
        cart.totalPrice === 0
          ? selectedOffer.price
          : cart.totalPrice + selectedOffer.price,
      totalShipping: !foundOffer
        ? cart.totalShipping + selectedOffer.shippingPrice
        : cart.totalShipping,
    });
  }

  function increaseAmount(cartItem) {
    const index = getIndex(cartItem);
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

  function decreaseAmount(cartItem) {
    const index = getIndex(cartItem);
    cart.items[index].amount === 1
      ? setCart(deleteFromCart(cartItem, index))
      : setCart(removeFromCart(cartItem, index));
  }

  function removeFromCart(cartItem, index) {
    const removeItemArray = [
      ...cart.items.slice(0, index),
      { ...cart.items[index], amount: (cart.items[index].amount -= 1) },
      ...cart.items.slice(index + 1),
    ];
    const removeItemCart = {
      ...cart,
      items: removeItemArray,
      totalPrice: (cart.totalPrice -= cartItem.price),
    };
    return removeItemCart;
  }

  function deleteFromCart(cartItem, index) {
    const deleteItemsArray = [
      ...cart.items.slice(0, index),
      ...cart.items.slice(index + 1),
    ];
    const deleteItemCart = {
      ...cart,
      items: deleteItemsArray,
      totalPrice: (cart.totalPrice -= cartItem.price),
      totalShipping: (cart.totalShipping -= cartItem.shippingPrice),
    };
    return deleteItemCart;
  }

  function getIndex(cartItem) {
    const index = cart.items.findIndex(
      (elem) => elem.id === cartItem.id && elem.price === cartItem.price
    );
    return index;
  }
}
