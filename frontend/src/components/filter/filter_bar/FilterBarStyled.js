import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  justify-content: center;
  height: 5vh;
  flex-direction: row;
  display: flex;
  border: 1px solid #707070;
  align-items: center;
`;

export const FilterWrapperItem = styled.div`
  width: 50%;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  flex-direction: row;
  display: flex;
  border: 1px solid #707070;
  background-color: #f1f1f1;
  align-items: center;

  img {
    margin-right: 5px;
  }

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
