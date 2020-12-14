import { useParams } from "react-router-dom";
import { BookmarkIcon, OfferDetails } from "../../components/components";
import { getPriceRange, findProduct } from "../../services/services";
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

  const product = findProduct(id, products);

  return (
    <MainWrapper>
      <TopWrapper>
        <TitleWrapper>
          {product.title}, {product.size} ml
          <PriceRange>{getPriceRange(product.offers)}</PriceRange>
        </TitleWrapper>
        <BookmarkIcon
          id={id}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      </TopWrapper>
      <Image src={product.image} alt="" />
      <Description>
        <strong>Beschreibung:</strong> {product.description}
      </Description>
      <OfferDetails
        offers={product.offers}
        product={product}
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
  margin-bottom: 1em;
  width: 80%;
`;

const PriceRange = styled.span`
  color: #f70000;
  display: block;
  font-size: 16px;
  text-decoration: none;
`;

const Description = styled.p`
  display: block;
  font-size: 15px;
  text-decoration: none;
`;
