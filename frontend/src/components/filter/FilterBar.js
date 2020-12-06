import React from "react";
import FilterIcon from "../../assets/icons/filter.svg";
import SortIcon from "../../assets/icons/sort.svg";
import styled from "styled-components";

export default function FilterBar({
  toggleFilterOverlay,
  sortProducts,
  products,
}) {
  return (
    <FilterWrapper>
      <FilterWrapperItem onClick={() => toggleFilterOverlay()}>
        <img src={FilterIcon} alt="" /> Filter
      </FilterWrapperItem>
      <FilterWrapperItem>
        <img src={SortIcon} alt="" />
        <select
          name="sortProducts"
          onChange={(event) => sortProducts(event.target.value, products)}
        >
          <option value="NameUp">Name (aufsteigend)</option>
          <option value="NameDown">Name (absteigend)</option>
        </select>
      </FilterWrapperItem>
    </FilterWrapper>
  );
}

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
