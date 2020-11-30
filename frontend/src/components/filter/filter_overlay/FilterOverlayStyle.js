import styled from "styled-components";

export const FilterOverlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
  left: 0;
  top: 0;
  background-color: #f1f1f1; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

export const FilterOverlayBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10vh;
  width: 100%;
  /* position: fixed; */
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
