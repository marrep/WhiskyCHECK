import React from "react";
import { useState } from "react";
import ProductItemSearch from "../../product/product_item_search/ProductItemSearch";
import { SearchWrapper } from "./SearchStyled";
import countOffers from "../../../services/countOffers";
import Filter from "../../filter/Filter";

export default function Search({ productData, toggleBookmark, bookmarks }) {
  const [productView, setProductView] = useState(productData);
  const [results, setResults] = useState(countOffers(productView));

  return (
    <SearchWrapper>
      <h1>Whisky | {results}</h1>
      <Filter />
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
    </SearchWrapper>
  );
}
