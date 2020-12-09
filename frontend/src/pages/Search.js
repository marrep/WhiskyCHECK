import React from "react";
import styled from "styled-components";
import SearchFilterBar from "../components/search/SearchFilterBar";
import SearchProductItem from "../components/search/SearchProductItem";
import useFilter from "../hooks/useFilter";

export default function Search({ products, toggleBookmark, bookmarks }) {
  const {
    originFilter,
    showHideFilter,
    filterHandler,
    toggleFilter,
    searchResults,
    sortProducts,
  } = useFilter();

  return (
    <SearchWrapper>
      <SearchHeaderWrapper>
        Whisky |{" "}
        {`${products.length} ${
          products.length === 1 ? "Ergebnis" : "Ergebnisse"
        }`}{" "}
      </SearchHeaderWrapper>
      <SearchFilterBar
        showHideFilter={showHideFilter}
        sortProducts={sortProducts}
      />
      <FilterTagItemWrapper
        style={{ display: toggleFilter ? "block" : "none" }}
      >
        {originFilter.map((filterTag) => (
          <FilterTagItem
            onClick={(event) => filterHandler(event.target.innerHTML)}
          >
            {filterTag}
          </FilterTagItem>
        ))}
      </FilterTagItemWrapper>
      {searchResults.map(({ title, image, offers, id }) => (
        <SearchProductItem
          title={title}
          image={image}
          offers={offers}
          id={id}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      ))}
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  a {
    text-decoration: none;
  }
`;

const SearchHeaderWrapper = styled.div`
  padding: 10px;
  font-family: Lato;
  font-size: 20px;
  margin-left: 5px;
  font-weight: 400;
`;

export const FilterTagItem = styled.span`
  margin: 5px;
  padding: 5px 10px;
  font-family: Lato;
  font-size: 14px;
  border-radius: 30px;
  background-color: #fadca0;

  img {
    height: 50%;
  }
`;

export const FilterTagItemWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  width: auto;
  overflow-x: auto;
  white-space: nowrap;
`;
