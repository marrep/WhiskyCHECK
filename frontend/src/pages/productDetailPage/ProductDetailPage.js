import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BookmarkIcon from "../../components/bookmark/BookmarkIcon";
import { getPriceRange } from "../../services/helpers";
import OfferDetails from "../../components/product/OfferDetails";

export default function ProductDetailPage({
  products,
  selectedOffer,
  selectDefaultOffer,
  toggleOffers,
  toggleBookmark,
  bookmarks,
  setToggleOffer,
  selectNewOffer,
  addToCart,
}) {
  let { id } = useParams();

  function findProduct(id, products) {
    const foundProduct = products.find(({ id }) => id === 1);
    return foundProduct;
  }

  return (
    <ItemWrapperMain>
      <ItemWrapperTop>
        <ItemTitleSize>
          {findProduct(id, products).title} {findProduct(id, products).size} ml
        </ItemTitleSize>
        <BookmarkIcon
          id={id}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      </ItemWrapperTop>
      <ItemPriceRange>
        {getPriceRange(findProduct(id, products).offers)}
      </ItemPriceRange>
      <ItemImage src={findProduct(id, products).image} alt="" />
      <ItemDescription>
        <strong>Beschreibung:</strong> {products[id].description}
      </ItemDescription>
      <OfferDetails
        offers={findProduct(id, products).offers}
        product={findProduct(id, products)}
        selectedOffer={selectedOffer}
        selectDefaultOffer={selectDefaultOffer}
        toggleOffers={toggleOffers}
        setToggleOffer={setToggleOffer}
        selectNewOffer={selectNewOffer}
        addToCart={addToCart}
      />
    </ItemWrapperMain>
  );
}

export const ItemWrapperMain = styled.div`
  text-decoration: none;
  padding: 1em;
  overflow: hidden;
  font-family: Lato;
`;

export const ItemWrapperTop = styled.div`
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  display: flex;
`;

export const ItemImage = styled.img`
  width: auto;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  display: block;
`;

export const ItemTitleSize = styled.span`
  width: 80%;
  text-decoration: none;
  padding-right: 5%;
  font-size: 20px;
  display: block;
  color: #003f8a;
`;

export const ItemPriceRange = styled.span`
  text-decoration: none;
  font-size: 15px;
  display: block;
  color: #f70000;
`;

export const ItemDescription = styled.p`
  text-decoration: none;
  font-size: 15px;
  display: block;
`;
