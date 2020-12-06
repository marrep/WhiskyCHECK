import React from "react";
import styled from "styled-components";
import SearchHeader from "../../components/search/SearchHeader";
import SearchResults from "../../components/search/SearchResults";
import FilterBar from "../../components/filter/FilterBar";
import FilterOverlay from "../../components/filter/FilterOverlay";
import FilterTagWrapper from "../../components/filter/FilterTagWrapper";

export default function Search({
  products,
  sortProducts,
  toggleFilterOverlay,
  filterHandler,
  originFilter,
  filterOverlay,
}) {
  return (
    <SearchWrapper>
      <SearchHeader products={products} />
      <FilterBar
        toggleFilterOverlay={toggleFilterOverlay}
        sortProducts={sortProducts}
      />
      <FilterTagWrapper
        filterHandler={filterHandler}
        originFilter={originFilter}
      />
      <SearchResults products={products} />
      <FilterOverlay
        toggleFilterOverlay={toggleFilterOverlay}
        products={products}
        filterHandler={filterHandler}
        filterOverlay={filterOverlay}
        originFilter={originFilter}
      />
    </SearchWrapper>
  );
}

export const SearchWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  a {
    text-decoration: none;
  }
`;
