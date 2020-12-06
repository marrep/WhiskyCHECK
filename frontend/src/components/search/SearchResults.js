import React from "react";
import ProductItemSearch from "../product/ProductItemSearch";

export default function SearchResults({ products }) {
  return (
    <>
      {products.map(({ title, image, offers, id }) => (
        <ProductItemSearch
          title={title}
          image={image}
          offers={offers}
          id={id}
        />
      ))}
    </>
  );
}
