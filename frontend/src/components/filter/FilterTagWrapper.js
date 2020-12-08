import React from "react";
import styled from "styled-components";

export default function FilterTagWrapper({
  originFilter,
  filterHandler,
  toggleFilter,
}) {
  return (
    <FilterTagItemWrapper style={{ display: toggleFilter ? "block" : "none" }}>
      {originFilter.map((filterTag) => (
        <FilterTagItem
          onClick={(event) => filterHandler(event.target.innerHTML)}
        >
          {filterTag}
        </FilterTagItem>
      ))}
    </FilterTagItemWrapper>
  );
}

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
