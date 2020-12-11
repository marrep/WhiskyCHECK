import React from "react";
import styled from "styled-components";
import confirmation from "../assets/icons/confirmation.svg";

export default function Confirmation() {
  return (
    <MainWrapper>
      <img src={confirmation} alt="" />
      <h2>Vielen Dank für deine Bestellung!</h2>
      <p>
        Du erhältst in Kürze eine Bestellbestätigung unter der von dir
        angegebenen Emailaddresse
      </p>
    </MainWrapper>
  );
}

export const MainWrapper = styled.div`
  display: block;
  margin: auto;
  font-family: Lato;
  text-align: center;
  padding-top: 50px;
  width: 50%;

  img {
    font-size: 18px;
  }

  h2 {
    font-size: 18px;
    color: #4a4a4a;
  }

  p {
    font-size: 12px;
    color: #9b9b9b;
  }
`;
