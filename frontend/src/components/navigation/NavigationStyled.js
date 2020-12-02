import styled from "styled-components";

export const FooterWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  bottom: 0;
  position: fixed;
  background-color: #f1f1f1;

  span {
    position: relative;
    padding: 0.25em 0.5em;
    border-radius: 3em;
    right: -3em;
    bottom: 1.5em;
    color: #ffffff;
    background-color: #f70000;
  }

  span:link {
    text-decoration: none;
  }
`;
