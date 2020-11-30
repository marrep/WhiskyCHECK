import React from "react";
import { useState } from "react";
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
    console.log(filterStatus);
  }

  return (
    <SearchWrapper>
      <h1>Whisky | {results}</h1>
      <FilterBar toggleFilterStatus={toggleFilterStatus} />
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
