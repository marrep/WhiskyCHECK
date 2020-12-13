import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getCartImage from "../services/getCartImage";
import convertToEuro from "../services/convertToEuro";
import CartTotalPrice from "../components/cart/CartTotalPrice";
import loadLocally from "../lib/loadLocally";
import { useHistory } from "react-router-dom";
import { validateName, validateEmail } from "../services/validationService";

export default function Checkout({
  cart,
  products,
  handleCheckout,
  orderData,
  setOrderData,
}) {
  const history = useHistory();

  return (
    <>
      <MainWrapper>
        <TopWrapper>
          <span>Meine Bestellung</span>
        </TopWrapper>

        {cart.items.map((cartItem) => (
          <>
            <CartWrapper>
              <RightWrapper>{cartItem.amount} x</RightWrapper>
              <LeftWrapper>
                <img src={getCartImage(products, cartItem.id)} alt="" />
              </LeftWrapper>
              <CenterWrapper>
                <Price>{convertToEuro(cartItem.price)}</Price>
                <Title>{cartItem.title}</Title>
                <Seller>Versand durch {cartItem.seller}</Seller>
              </CenterWrapper>
            </CartWrapper>
          </>
        ))}

        <CartTotalPrice cart={cart} />

        <Form>
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
            <select name="country" onChange={handleChange} required>
              <option value="Deutschland">Deutschland</option>
              <option value="Österreich">Österreich</option>
              <option value="Schweiz">Schweiz</option>
            </select>
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
          <ButtonWrapper>
            <CheckoutButton onClick={() => handleCheckout(orderData, history)}>
              bestätigen
            </CheckoutButton>
          </ButtonWrapper>
        </Form>
      </MainWrapper>
    </>
  );

  function handleChange(event) {
    setOrderData({
      ...orderData,
      [event.target.name]: event.target.value,
    });
  }
}

const ButtonWrapper = styled.div`
  display: block;
  text-align: center;
  width: 100%;
`;

const CheckoutButton = styled.button`
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  display: block;
  margin: 3em auto;
  padding: 1em 2.5em;
  text-transform: uppercase;
  width: 80%;
`;

const MainWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

const TopWrapper = styled.div`
  border-bottom: 1px solid #dadbdc;
  display: block;
  padding: 10px;
  width: 100%;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`;

const LeftWrapper = styled.div`
  align-items: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  text-decoration: none;
  width: 25%;

  img {
    display: block;
    height: auto;
    margin: 0 auto;
    max-height: 100px;
    max-width: 100%;
    overflow: hidden;
    width: auto;
  }
`;

const CenterWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 55%;
`;

const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const Price = styled.span`
  color: #e43122;
  display: block;
  font-size: 18px;
  text-align: left;
`;

const Seller = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  text-align: left;
`;

const Title = styled.span`
  text-align: left;
  display: block;
  font-size: 14px;
  color: #134085;
`;

const Form = styled.form`
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Lato;
  gap: 1em;

  .select {
    display: inline;
    width: 100px;
  }

  input {
    margin-left: 1em;
    width: 100% auto;
  }
`;
