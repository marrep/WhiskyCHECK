import React from "react";
import {
  FilterOverlayWrapper,
  FilterOverlayBar,
  FilterOverlayElements,
} from "./FilterOverlayStyle";
// import FilterPriceRange from "../filter_price_range/FilterPriceRange";
import FilterTags from "../filter_tags/FilterTags";

export default function FilterOverlay({
  toggleFilterStatus,
  filterStatus,
  productData,
}) {
  function filterProducts(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <FilterOverlayWrapper
      style={{ display: filterStatus === false ? "none" : "block" }}
    >
      <FilterOverlayBar filterStatus={filterStatus}>
        <p onClick={() => toggleFilterStatus()}>Abbrechen</p>
        <h1>Filter</h1>
        <p>Zurücksetzen</p>
      </FilterOverlayBar>
      <FilterOverlayElements>
        <FilterTags productData={productData} filterProducts={filterProducts} />
      </FilterOverlayElements>
    </FilterOverlayWrapper>
  );
}
