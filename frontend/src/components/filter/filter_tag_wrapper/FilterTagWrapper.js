import React from "react";
import { FilterTagItem, FilterTagItemWrapper } from "./FilterTagWrapperStyled";

export default function FilterTagWrapper({
  originFilter,
  filterHandler,
  setOriginFilter,
}) {
  console.log(originFilter);

  return (
    <FilterTagItemWrapper>
      {originFilter.map((filterTag) => (
        <FilterTagItem
          onClick={(event) =>
            filterHandler(event.target.innerHTML, originFilter, setOriginFilter)
          }
        >
          {filterTag}
        </FilterTagItem>
      ))}
    </FilterTagItemWrapper>
  );
}
