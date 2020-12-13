import PropTypes from "prop-types";
import React from "react";
import SearchFilterBar from "../components/search/SearchFilterBar";
import SearchProductItem from "../components/search/SearchProductItem";
import styled from "styled-components";

export default function Search({
  toggleBookmark,
  bookmarks,
  searchResults,
  sortProducts,
  showHideFilter,
  filterHandler,
  originFilter,
  toggleFilter,
}) {
  Search.propTypes = {
    products: PropTypes.array.isRequired,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
  };

  return (
    <MainWrapper>
      <TopWrapper>
        <span>
          Suche |{" "}
          {`${searchResults.length} ${
            searchResults.length === 1 ? "Ergebnis" : "Ergebnisse"
          }`}{" "}
        </span>
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

const TopWrapper = styled.div`
  display: block;
  padding: 10px;
  width: 100%;
  text-align: center;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }
`;

const MainWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  a {
    text-decoration: none;
  }
`;

const FilterTagItem = styled.span`
  background-color: #f3d599;
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
