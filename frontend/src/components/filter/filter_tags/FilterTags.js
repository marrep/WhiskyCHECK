import React from "react";
import createOriginTags from "../../../services/createOriginTags";
import { FilterTagsStyled } from "./FilterTagsStyled";

export default function FilterTags({ productData, filterProducts }) {
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
        {createOriginTags(productData)}
      </form>
      <button type="submit" onClick={filterProducts}></button>
    </FilterTagsStyled>
  );
}
