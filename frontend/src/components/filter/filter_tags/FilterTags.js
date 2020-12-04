import React from "react";
import { FilterTagsStyled } from "./FilterTagsStyled";

export default function FilterTags({
  productData,
  filterHandler,
  originFilter,
  setOriginFilter,
}) {
  const arrayData = [];
  productData.forEach((element) => {
    if (!arrayData.includes(element.origin)) {
      arrayData.push(element.origin);
    }
  });

  return (
    <FilterTagsStyled>
      <form>
        <h2>Herkunft</h2>
        {arrayData.map((element, index) => (
          <label
            htmlFor={element[index]}
            onClick={(event) =>
              filterHandler(event.target.value, originFilter, setOriginFilter)
            }
          >
            {element}
            <input
              type="checkbox"
              name="origin"
              value={element}
              id={element[index]}
            />
          </label>
        ))}
      </form>
    </FilterTagsStyled>
  );
}
