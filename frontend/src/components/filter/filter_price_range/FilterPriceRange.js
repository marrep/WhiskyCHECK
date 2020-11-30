import React from "react";
import { FilterPriceRangeWrapper } from "./FilterPriceRangeStyle";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

export default function FilterPriceRange() {
  return (
    <FilterPriceRangeWrapper>
      <Slider step={2} />
    </FilterPriceRangeWrapper>
  );
}

// https://www.npmjs.com/package/react-rangeslider
