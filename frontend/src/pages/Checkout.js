import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { validateName, validateEmail } from "../services/validationService";
import getCartImage from "../services/getCartImage";
import convertToEuro from "../services/convertToEuro";
import CartTotalPrice from "../components/cart/CartTotalPrice";

export default function Checkout({ cart, products }) {
  const [orderData, setOrderData] = useState({
    customerId: cart.customerid,
    date: cart.date,
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalShipping: cart.totalShipping,
    name: "",
    surname: "",
    street: "",
    number: 0,
    city: "",
    zip: 0,
    country: "",
    email: "",
    paymentMethod: "",
  });

  return (
    <>
      <CartWrapper>
        <CartWrapperTop>
          <span>Meine Bestellung</span>
        </CartWrapperTop>

        {cart.items.map((cartItem) => (
          <>
            <CartItemWrapper>
              <CartItemWrapperRight>{cartItem.amount} x</CartItemWrapperRight>
              <CartItemWrapperLeft>
                <img src={getCartImage(products, cartItem.id)} alt="" />
              </CartItemWrapperLeft>
              <CartItemWrapperCenter>
                <CartItemPrice>{convertToEuro(cartItem.price)}</CartItemPrice>
                <CartItemTitle>{cartItem.title}</CartItemTitle>
                <CartItemSeller>Versand durch {cartItem.seller}</CartItemSeller>
              </CartItemWrapperCenter>
            </CartItemWrapper>
          </>
        ))}

        <CartTotalPrice cart={cart} />

        <CheckoutForm onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} required />
          </label>
          <label>
            Nachname:
            <input
              type="text"
              name="surname"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Straße:
            <input type="text" name="street" onChange={handleChange} required />
          </label>
          <label>
            Hausnummer:
            <input type="text" name="number" onChange={handleChange} required />
          </label>
          <label>
            Stadt:
            <input type="text" name="city" onChange={handleChange} required />
          </label>
          <label>
            PLZ:
            <input type="text" name="zip" onChange={handleChange} required />
          </label>
          <label>
            Land:
            <input
              type="text"
              name="country"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={handleChange} required />
          </label>
          <label>
            Paypal
            <input
              type="radio"
              name="paymentMethod"
              onChange={handleChange}
              value="paypal"
              required
            />
            Worldpay
            <input
              type="radio"
              name="paymentMethod"
              onChange={handleChange}
              value="worldpay"
            />
            Bitcoin
            <input
              type="radio"
              name="paymentMethod"
              onChange={handleChange}
              value="bitcoin"
            />
          </label>
          <CheckoutButtonWrapper>
            <CheckoutButtonStyled onClick={handleSubmit}>
              Jetzt bestellen
            </CheckoutButtonStyled>
          </CheckoutButtonWrapper>
        </CheckoutForm>
      </CartWrapper>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (
      validateName(orderData.name) &&
      validateName(orderData.surname) &&
      validateEmail(orderData.email)
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      console.log(validateName(orderData.name));
      console.log(validateName(orderData.surname));
      console.log(validateEmail(orderData.email));

      const raw = JSON.stringify(orderData);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://whiskycheck.local/create-order", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      alert("Please check your form details.");
    }
  }

  function handleChange(event) {
    setOrderData({
      ...orderData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }
}

export const CheckoutButtonWrapper = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`;

export const CheckoutButtonStyled = styled.button`
  display: block;
  margin: auto;
  width: 80%;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;

export const CartWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

export const CartWrapperTop = styled.div`
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #dadbdc;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

export const CartItemWrapper = styled.div`
  font-family: Lato;
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  flex-direction: row;
  display: flex;
`;

export const CartItemWrapperLeft = styled.div`
  width: 25%;
  padding: 10px;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: top;

  img {
    width: auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 100px;
    margin-right: auto;
    margin-left: auto;
    height: auto;
    display: block;
  }
`;

export const CartItemWrapperCenter = styled.div`
  text-align: left;
  width: 55%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: left;
`;

export const CartItemWrapperRight = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const CartItemPrice = styled.span`
  text-align: left;
  display: block;
  font-size: 18px;
  color: #e43122;
`;

export const CartItemSeller = styled.span`
  text-align: left;
  display: block;
  font-size: 12px;
  color: #575757;
`;

export const CartItemTitle = styled.span`
  text-align: left;
  display: block;
  font-size: 14px;
  color: #134085;
`;

const CheckoutForm = styled.form`
  font-family: Lato;
  display: grid;
  gap: 1em;
  .select {
    display: inline;
    width: 100px;
  }
`;
