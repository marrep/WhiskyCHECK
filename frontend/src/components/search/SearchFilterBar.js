import FilterIcon from "../../assets/icons/filter.svg";
import PropTypes from "prop-types";
import React from "react";
import SortIcon from "../../assets/icons/sort.svg";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";

export default function SearchFilterBar({ showHideFilter, sortProducts }) {
  const { products } = useProducts();

  SearchFilterBar.propTypes = {
    showHideFilter: PropTypes.func.isRequired,
    sortProducts: PropTypes.func.isRequired,
  };

  return (
    <MainWrapper>
      <FilterWrapper onClick={() => showHideFilter()}>
        <img src={FilterIcon} alt="" /> Filter
      </FilterWrapper>
      <FilterWrapper>
        <img src={SortIcon} alt="" />
        <select
          name="sortProducts"
          onChange={(event) => sortProducts(event.target.value, products)}
        >
          <option value="NameUp">Name (aufsteigend)</option>
          <option value="NameDown">Name (absteigend)</option>
        </select>
      </FilterWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  align-items: center;
  border: 1px solid #707070;
  display: flex;
  flex-direction: row;
  height: 5vh;
  justify-content: center;
  width: 100%;
`;

export const FilterWrapper = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  border: 1px solid #707070;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  height: 100%;
  justify-content: center;
  width: 50%;

  img {
    margin-right: 5px;
  }

  select {
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
  }
`;
