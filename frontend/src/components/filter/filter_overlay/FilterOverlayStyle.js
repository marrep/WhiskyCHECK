import styled from "styled-components";

export const FilterOverlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  background-color: #f1f1f1;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const FilterOverlayBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10vh;
  width: 100%;
  top: 0;
  background-color: white;
`;

export const FilterOverlayElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
`;
