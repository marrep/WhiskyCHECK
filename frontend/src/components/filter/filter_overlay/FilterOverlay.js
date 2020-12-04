import React from "react";
import {
  FilterOverlayWrapper,
  FilterOverlayBar,
  FilterOverlayElements,
} from "./FilterOverlayStyle";
import FilterTags from "../filter_tags/FilterTags";

export default function FilterOverlay({
  toggleFilterStatus,
  filterOverlay,
  productData,
  filterHandler,
  originFilter,
  setOriginFilter,
}) {
  return (
    <FilterOverlayWrapper
      style={{ display: filterOverlay === false ? "none" : "block" }}
    >
      <FilterOverlayBar filterOverlay={filterOverlay}>
        <p onClick={() => toggleFilterStatus()}>Abbrechen</p>
        <h1>Filter</h1>
        <p>Zurücksetzen</p>
      </FilterOverlayBar>
      <FilterOverlayElements>
        <FilterTags
          productData={productData}
          filterHandler={filterHandler}
          originFilter={originFilter}
          setOriginFilter={setOriginFilter}
        />
      </FilterOverlayElements>
    </FilterOverlayWrapper>
  );
}
