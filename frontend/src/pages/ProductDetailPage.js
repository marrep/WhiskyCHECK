import { useParams } from "react-router-dom";
import BookmarkIcon from "../components/bookmark/BookmarkIcon";
import getPriceRange from "../services/getPriceRange";
import OfferDetails from "../components/offer/OfferDetails";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function ProductDetailPage({
  products,
  toggleBookmark,
  bookmarks,
  addToCart,
}) {
  let { id } = useParams();

  ProductDetailPage.propTypes = {
    products: PropTypes.array.isRequired,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
  };

  function findProduct(productId) {
    const foundProduct = products.find(({ id }) => id == productId);
    return foundProduct;
  }

  return (
    <MainWrapper>
      <TopWrapper>
        <TitleWrapper>
          {findProduct(id).title} {findProduct(id).size} ml
        </TitleWrapper>
        <BookmarkIcon
          id={id}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      </TopWrapper>
      <PriceRange>{getPriceRange(findProduct(id).offers)}</PriceRange>
      <Image src={findProduct(id).image} alt="" />
      <Description>
        <strong>Beschreibung:</strong> {findProduct(id).description}
      </Description>
      <OfferDetails
        offers={findProduct(id).offers}
        product={findProduct(id)}
        addToCart={addToCart}
      />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  font-family: Lato;
  overflow: hidden;
  padding: 1em;
  text-decoration: none;
`;

const TopWrapper = styled.div`
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  display: flex;
`;

const Image = styled.img`
  display: block;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  width: auto;
`;

const TitleWrapper = styled.span`
  color: #003f8a;
  display: block;
  font-size: 20px;
  padding-right: 5%;
  text-decoration: none;
  width: 80%;
`;

const PriceRange = styled.span`
  color: #f70000;
  display: block;
  font-size: 15px;
  text-decoration: none;
`;

const Description = styled.p`
  display: block;
  font-size: 15px;
  text-decoration: none;
`;
