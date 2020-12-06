import React from "react";
import styled from "styled-components";

export default function BookmarkBuyButton() {
  return <BookmarkBuyButtonStyled>Jetzt kaufen</BookmarkBuyButtonStyled>;
}

export const BookmarkBuyButtonStyled = styled.button`
  display: block;
  margin-left: 0;
  margin-right: 0;
  width: 80%;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
