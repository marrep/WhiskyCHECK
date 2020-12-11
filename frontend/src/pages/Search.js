import PropTypes from "prop-types";
import React from "react";
import SearchFilterBar from "../components/search/SearchFilterBar";
import SearchProductItem from "../components/search/SearchProductItem";
import styled from "styled-components";
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

  Search.propTypes = {
    products: PropTypes.array.isRequired,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
  };

  return (
    <MainWrapper>
      <TopWrapper>
        Whisky |{" "}
        {`${products.length} ${
          products.length === 1 ? "Ergebnis" : "Ergebnisse"
        }`}{" "}
      </TopWrapper>
      <SearchFilterBar
        showHideFilter={showHideFilter}
        sortProducts={sortProducts}
      />
      <FilterTags style={{ display: toggleFilter ? "block" : "none" }}>
        {originFilter.map((filterTag) => (
          <FilterTagItem
            onClick={(event) => filterHandler(event.target.innerHTML)}
          >
            {filterTag}
          </FilterTagItem>
        ))}
      </FilterTags>
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
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  a {
    text-decoration: none;
  }
`;

const TopWrapper = styled.div`
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  margin-left: 5px;
  padding: 10px;
`;

const FilterTagItem = styled.span`
  background-color: #fadca0;
  border-radius: 30px;
  font-family: Lato;
  font-size: 14px;
  margin: 5px;
  padding: 5px 10px;

  img {
    height: 50%;
  }
`;

const FilterTags = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 5px;
  white-space: nowrap;
  width: auto;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
