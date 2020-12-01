import React from "react";
import FilterIcon from "../../../assets/filter.svg";
import SortIcon from "../../../assets/sort.svg";
import { FilterWrapper, FilterWrapperItem } from "./FilterBarStyled";

export default function FilterBar({ toggleFilterStatus, sortHandler }) {
  return (
    <FilterWrapper>
      <FilterWrapperItem onClick={() => toggleFilterStatus()}>
        <img src={FilterIcon} alt="" /> Filter
      </FilterWrapperItem>
      <FilterWrapperItem>
        <img src={SortIcon} alt="" />
        <select name="sortProducts" onChange={sortHandler}>
          <option value="NameUp">Name (aufsteigend)</option>
          <option value="NameDown">Name (absteigend)</option>
        </select>
      </FilterWrapperItem>
    </FilterWrapper>
  );
}
