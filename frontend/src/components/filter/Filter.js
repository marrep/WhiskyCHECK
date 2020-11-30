import React from "react";
import FilterIcon from "../../assets/filter.svg";
import SortIcon from "../../assets/sort.svg";
import { FilterWrapper, FilterWrapperItem } from "./FilterStyled";

export default function Filter() {
  return (
    <FilterWrapper>
      <FilterWrapperItem>
        <img src={FilterIcon} alt="" /> Filter
      </FilterWrapperItem>
      <FilterWrapperItem>
        <img src={SortIcon} alt="" /> Sortieren
      </FilterWrapperItem>
    </FilterWrapper>
  );
}
