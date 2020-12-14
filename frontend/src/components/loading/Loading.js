import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../assets/icons/logo.svg";
import WhiskyAnimation from "../../assets/animations/whisky-animation.gif";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setShowLoading(!showLoading), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    showLoading && (
      <>
        <MainWrapper>
          <Animation src={WhiskyAnimation} />
          <LogoWrapper>
            <img src={Logo} alt="WhiskyCheck Logo" />
          </LogoWrapper>
        </MainWrapper>
      </>
    )
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #003f8a;
  z-index: 1001;
`;

const Animation = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  margin-top: -50px;
`;

const LogoWrapper = styled.div`
  height: 10vh;
  width: auto;
`;
