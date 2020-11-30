import React from "react";
import FilterIcon from "../../../assets/filter.svg";
import SortIcon from "../../../assets/sort.svg";
import { FilterWrapper, FilterWrapperItem } from "./FilterBarStyled";

export default function FilterBar({ toggleFilterStatus }) {
  return (
    <FilterWrapper>
      <FilterWrapperItem onClick={() => toggleFilterStatus()}>
        <img src={FilterIcon} alt="" /> Filter
      </FilterWrapperItem>
      <FilterWrapperItem>
        <img src={SortIcon} alt="" />
        <select name="sortProducts">
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </FilterWrapperItem>
    </FilterWrapper>
  );
}
