import React from "react";
import styled from "styled-components";
import SearchHeader from "../../components/search/SearchHeader";
import SearchResults from "../../components/search/SearchResults";
import FilterBar from "../../components/filter/FilterBar";
import FilterTagWrapper from "../../components/filter/FilterTagWrapper";

export default function Search({
  products,
  sortProducts,
  toggleFilterOverlay,
  filterHandler,
  originFilter,
  filterOverlay,
  toggleBookmark,
  bookmarks,
  searchResults,
}) {
  return (
    <SearchWrapper>
      <SearchHeader products={products} />
      <FilterBar
        toggleFilterOverlay={toggleFilterOverlay}
        sortProducts={sortProducts}
        products={products}
      />
      <FilterTagWrapper
        filterHandler={filterHandler}
        originFilter={originFilter}
        filterOverlay={filterOverlay}
      />
      <SearchResults
        searchResults={searchResults}
        products={products}
        toggleBookmark={toggleBookmark}
        bookmarks={bookmarks}
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
