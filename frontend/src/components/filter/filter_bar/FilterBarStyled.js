import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: #f1f1f1;
  border: 1px solid #707070;
`;

export const FilterWrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 5vh;
  background-color: #f1f1f1;
  border: 1px solid #707070;

  select {
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;
    background: transparent;
  }
`;
