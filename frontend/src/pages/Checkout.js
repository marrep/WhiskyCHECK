import React from "react";
import styled from "styled-components";
import CartTotalPrice from "../components/cart/CartTotalPrice";
import { convertToEuro, getCartImage } from "../services/helpers";
import { useState } from "react";

export default function Checkout({ cart, products }) {
  console.log(cart);

  const [newOrder, createNewOrder] = useState({
    customerid: cart.customerid,
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
    payment: "",
  });

  function handleChange(event) {
    createNewOrder({
      ...newOrder,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createNewOrder(newOrder);
    console.log(newOrder);
  }

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
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Nachname:
            <input type="text" name="surname" onChange={handleChange} />
          </label>
          <label>
            Straße:
            <input type="text" name="street" onChange={handleChange} />
          </label>
          <label>
            Hausnummer:
            <input type="text" name="number" onChange={handleChange} />
          </label>
          <label>
            Stadt:
            <input type="text" name="city" onChange={handleChange} />
          </label>
          <label>
            PLZ:
            <input type="text" name="zip" onChange={handleChange} />
          </label>
          <label>
            Land:
            <input type="text" name="country" onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={handleChange} />
          </label>
          <label>
            Paypal
            <input
              type="radio"
              name="payment"
              onChange={handleChange}
              value="paypal"
            />
            Worldpay
            <input
              type="radio"
              name="payment"
              onChange={handleChange}
              value="worldpay"
            />
            Bitcoin
            <input
              type="radio"
              name="payment"
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
