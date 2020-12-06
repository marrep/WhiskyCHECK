import React from "react";
import Logo from "../../assets/icons/logo.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBar>
      <img src={Logo} alt="React Logo" />
    </HeaderBar>
  );
}

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #003f8a;
`;
