import React from "react";
import { useState, useEffect } from "react";
import ProductItemSearch from "../../product/product_item_search/ProductItemSearch";
import { SearchWrapper } from "./SearchStyled";
import countOffers from "../../../services/countOffers";
import FilterBar from "../../filter/filter_bar/FilterBar";
import FilterOverlay from "../../filter/filter_overlay/FilterOverlay";

export default function Search({ productData, toggleBookmark, bookmarks }) {
  const [productView, setProductView] = useState(productData);
  const [results, setResults] = useState(countOffers(productView));
  const [filterStatus, setFilterStatus] = useState(false);

  function toggleFilterStatus() {
    setFilterStatus(!filterStatus);
  }

  function sortProducts(sortSelector) {
    console.log(sortSelector);
    if (sortSelector === "NameUp") {
      setProductView(
        Object.assign(
          [],
          productView.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          })
        )
      );
    }
    if (sortSelector === "NameDown") {
      setProductView(
        Object.assign(
          [],
          productView.sort((a, b) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
          })
        )
      );
    }
  }

  function sortHandler(event) {
    sortProducts(event.target.value);
  }

  return (
    <SearchWrapper>
      <h1>Whisky | {results}</h1>
      <FilterBar
        toggleFilterStatus={toggleFilterStatus}
        sortHandler={sortHandler}
      />
      {productView.map(({ title, image, offers }, index) => (
        <ProductItemSearch
          title={title}
          image={image}
          offers={offers}
          index={index}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      ))}
      <FilterOverlay
        toggleFilterStatus={toggleFilterStatus}
        filterStatus={filterStatus}
        productData={productData}
      />
    </SearchWrapper>
  );
}
