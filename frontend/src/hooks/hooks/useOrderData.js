import { useState, useEffect } from "react";
import { loadLocally, saveLocally } from "../../lib/localStorage";
import { useCart } from "../hooks";

export default function useOffers() {
  const { cart } = useCart();
  const [orderData, setOrderData] = useState(
    loadLocally("orderData") ?? {
      customerId: cart.customerid,
      date: cart.date,
      items: cart.items,
      totalPrice: cart.totalPrice,
      totalShipping: cart.totalShipping,
      name: "",
      surname: "",
      street: "",
      number: "",
      city: "",
      zip: "",
      country: "",
      email: "",
      paymentMethod: "",
    }
  );

  useEffect(() => {
    saveLocally("orderData", orderData);
  }, [orderData]);

  return {
    orderData,
    setOrderData,
  };
}
