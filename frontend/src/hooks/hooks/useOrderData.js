import { useState, useEffect } from "react";
import { loadLocally, saveLocally } from "../../lib/localStorage";

export default function useOffers() {
  const [orderData, setOrderData] = useState({
    customerId: "",
    date: "",
    items: "",
    totalPrice: "",
    totalShipping: "",
    name: "",
    surname: "",
    street: "",
    number: "",
    city: "",
    zip: "",
    country: "",
    email: "",
    paymentMethod: "",
  });

  useEffect(() => {
    setOrderData({
      ...orderData,
      customerId: loadLocally("cart").customerid,
      date: loadLocally("cart").date,
      items: loadLocally("cart").items,
      totalPrice: loadLocally("cart").totalPrice,
      totalShipping: loadLocally("cart").totalShipping,
    });
  }, [orderData.name]);

  useEffect(() => {
    saveLocally("orderData", orderData);
  }, [orderData]);

  return {
    orderData,
    setOrderData,
  };
}
