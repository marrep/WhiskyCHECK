import React from "react";
import { FilterTagsStyled } from "./FilterTagsStyled";

export default function FilterTags({ productData, filterHandler }) {
  const arrayData = [];
  productData.forEach((element) => {
    if (!arrayData.includes(element.origin)) {
      arrayData.push(element.origin);
    }
  });

  return (
    <FilterTagsStyled>
      <form>
        <h2>Preis (max.)</h2>
        <div class="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            id="myRange"
          />
        </div>
        <h2>Herkunft</h2>
        {arrayData.map((element, index) => (
          <label
            htmlFor={element[index]}
            onClick={(event) => filterHandler(event)}
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
