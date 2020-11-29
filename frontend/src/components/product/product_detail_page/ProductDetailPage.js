import React from "react";
import { useParams } from "react-router-dom";
import {
  ItemTitleSize,
  ItemPriceRange,
  ItemImage,
  ItemWrapper,
  ItemDescription,
} from "./ProductDetailPageStyled";

export default function ProductDetailPage({ productData }) {
  let { id } = useParams();

  return (
    <ItemWrapper>
      <ItemTitleSize>
        {productData[id].title} {productData[id].size} ml
      </ItemTitleSize>
      <ItemPriceRange>74,90 - 77,90€</ItemPriceRange>
      <ItemImage src={productData[id].image} alt="" />
      <ItemDescription>{productData[id].description}</ItemDescription>
    </ItemWrapper>
  );
}
