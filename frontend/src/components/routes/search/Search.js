import React from "react";
import { useState, useEffect } from "react";
import ProductItemSearch from "../../product/product_item_search/ProductItemSearch";
import { SearchWrapper } from "./SearchStyled";
import FilterBar from "../../filter/filter_bar/FilterBar";
import FilterOverlay from "../../filter/filter_overlay/FilterOverlay";
import filterHandler from "../../../services/filterHandler";
import sortProducts from "../../../services/sortProducts";
import FilterTagWrapper from "../../filter/filter_tag_wrapper/FilterTagWrapper";

export default function Search({ productData, toggleBookmark, bookmarks }) {
  const [productView, setProductView] = useState(productData);
  const [filterOverlay, setFilterOverlay] = useState(false);
  const [originFilter, setOriginFilter] = useState([]);

  useEffect(() => {
    let newFilter = [].concat.apply(
      [],
      originFilter.map((elem) =>
        productView.filter((item) => elem === item.origin)
      )
    );

    originFilter.length === 0
      ? setProductView(productData)
      : setProductView(newFilter);
  }, [originFilter]);

  return (
    <SearchWrapper>
      <h1>
        Whisky |{" "}
        {`${productView.length} ${
          productView.length === 1 ? "Ergebnis" : "Ergebnisse"
        }`}{" "}
      </h1>
      <FilterBar
        toggleFilterStatus={() => setFilterOverlay(!filterOverlay)}
        sortHandler={(event) =>
          sortProducts(event.target.value, setProductView, productView)
        }
      />
      <FilterTagWrapper
        originFilter={originFilter}
        setOriginFilter={setOriginFilter}
        filterHandler={filterHandler}
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
        toggleFilterStatus={() => setFilterOverlay(!filterOverlay)}
        filterOverlay={filterOverlay}
        productData={productData}
        originFilter={originFilter}
        setOriginFilter={setOriginFilter}
        filterHandler={filterHandler}
      />
    </SearchWrapper>
  );
}
