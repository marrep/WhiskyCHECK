import React from "react";
import { useState } from "react";
import ProductItemSearch from "../../product/product_item_search/ProductItemSearch";
import { SearchWrapper } from "./SearchStyled";
import FilterBar from "../../filter/filter_bar/FilterBar";
import FilterOverlay from "../../filter/filter_overlay/FilterOverlay";
import filterHandler from "../../../services/filterHandler";
import sortProducts from "../../../services/sortProducts";

export default function Search({ productData, toggleBookmark, bookmarks }) {
  const [productView, setProductView] = useState(productData);
  const [filterStatus, setFilterStatus] = useState(false);

  return (
    <SearchWrapper>
      <h1>Whisky | {productView.length}</h1>
      <FilterBar
        toggleFilterStatus={() => setFilterStatus(!filterStatus)}
        sortHandler={(event) =>
          sortProducts(event.target.value, setProductView, productView)
        }
      />
      {productView.map(({ title, image, offers }, index) => (
        <ProductItemSearch
          title={title}
          image={image}
          offers={offers}
          index={index}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      ))}
      <FilterOverlay
        toggleFilterStatus={() => setFilterStatus(!filterStatus)}
        filterStatus={filterStatus}
        productData={productData}
        filterHandler={filterHandler}
      />
    </SearchWrapper>
  );
}
