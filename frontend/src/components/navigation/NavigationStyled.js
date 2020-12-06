import styled from "styled-components";

export const FooterWrapper = styled.nav`
  width: 100%;
  position: fixed;
  justify-content: space-around;
  height: 10vh;
  font-size: 10px;
  font-family: Lato;
  flex-direction: row;
  display: flex;
  bottom: 0;
  background-color: #f1f1f1;
  align-items: center;
`;

export const FooterCardCounter = styled.span`
  width: 15px;
  text-align: center;
  right: 42%;
  position: fixed;
  height: 15px;
  color: #ffffff;
  bottom: 6%;
  border-radius: 50%;
  background-color: #f70000;

  :link {
    text-decoration: none;
  }
`;

export const FooterBookmarkCounter = styled.span`
  width: 15px;
  text-align: center;
  right: 23%;
  position: fixed;
  height: 15px;
  color: #ffffff;
  bottom: 6%;
  border-radius: 50%;
  background-color: #f70000;

  :link {
    text-decoration: none;
  }
`;
