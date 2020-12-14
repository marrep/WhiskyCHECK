import Logo from "../../assets/icons/logo.svg";
import React from "react";
import styled from "styled-components/macro";

export default function Header() {
  return (
    <MainWrapper>
      <img src={Logo} alt="WhiskyCheck Logo" data-testid="Logo" />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  align-items: center;
  background-color: #003f8a;
  display: flex;
  flex-direction: column;
  height: 10vh;
  justify-content: center;
  width: 100%;
`;
