import React from "react";
import styled from "styled-components";
import FilterTags from "./FilterTags";

export default function FilterOverlay({
  toggleFilterOverlay,
  filterHandler,
  products,
  filterOverlay,
  originFilter,
}) {
  return (
    <FilterOverlayWrapper
      style={{ display: filterOverlay === false ? "none" : "block" }}
    >
      <FilterOverlayBar filterOverlay={filterOverlay}>
        <p onClick={() => toggleFilterOverlay()}>Abbrechen</p>
        <h1>Filter</h1>
        <p>Zurücksetzen</p>
      </FilterOverlayBar>
      <FilterOverlayElements>
        <FilterTags
          products={products}
          filterHandler={filterHandler}
          originFilter={originFilter}
        />
      </FilterOverlayElements>
    </FilterOverlayWrapper>
  );
}

export const FilterOverlayWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  background-color: #f1f1f1;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const FilterOverlayBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10vh;
  width: 100%;
  top: 0;
  background-color: white;
`;

export const FilterOverlayElements = styled.div`
  display: flex;
  justify-content: top;
  width: 100%;
  top: 0;
`;
