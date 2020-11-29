import React from "react";
import { useState } from "react";
import ProductItem from "../../product/product_item/ProductItem";
import { SearchWrapper } from "./SearchStyled";

export default function Search({ productData }) {
  const [productView, setProductView] = useState(productData);

  return (
    <SearchWrapper>
      {productView.map(({ title, image, offers }, index) => (
        <ProductItem
          title={title}
          image={image}
          offers={offers}
          index={index}
        />
      ))}
    </SearchWrapper>
  );
}
