import React from "react";
import styled from "styled-components";
import FilterBar from "../../components/filter/FilterBar";
import FilterTagWrapper from "../../components/filter/FilterTagWrapper";
import ProductItemSearch from "../../components/search/ProductItemSearch";

export default function Search({
  products,
  sortProducts,
  showHideFilter,
  filterHandler,
  originFilter,
  toggleFilter,
  toggleBookmark,
  bookmarks,
  searchResults,
}) {
  return (
    <SearchWrapper>
      <SearchHeaderWrapper>
        Whisky |{" "}
        {`${products.length} ${
          products.length === 1 ? "Ergebnis" : "Ergebnisse"
        }`}{" "}
      </SearchHeaderWrapper>
      <FilterBar showHideFilter={showHideFilter} sortProducts={sortProducts} />
      <FilterTagWrapper
        filterHandler={filterHandler}
        originFilter={originFilter}
        toggleFilter={toggleFilter}
      />
      {searchResults.map(({ title, image, offers, id }) => (
        <ProductItemSearch
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
