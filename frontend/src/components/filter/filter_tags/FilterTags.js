import React from "react";
import { onStockTags, originTags } from "../../../services/createFilterTags";
import { FilterTagsStyled } from "./FilterTagsStyled";

export default function FilterTags({ productData }) {
  return (
    <FilterTagsStyled>
      Auf Lager
      {onStockTags(productData)}
      <br></br>
      Herkunft
      {originTags(productData)}
    </FilterTagsStyled>
  );
}
