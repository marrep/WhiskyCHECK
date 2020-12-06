import React from "react";
import styled from "styled-components";

export default function CheckoutButton() {
  return (
    <CheckoutButtonWrapper>
      <CheckoutButtonStyled>Zur Kasse</CheckoutButtonStyled>
    </CheckoutButtonWrapper>
  );
}

export const CheckoutButtonWrapper = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`;

export const CheckoutButtonStyled = styled.button`
  width: 80%;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
