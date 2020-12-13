import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import countOffers from "../../services/countOffers";
import getPriceRange from "../../services/getPriceRange";
import getFastestDeliveryDay from "../../services/getFastestDeliveryDay";
import checkOnStock from "../../services/checkOnStock";

HomeProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  toggleBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
};

export default function HomeProductItem({ title, image, offers, id }) {
  return (
    <MainWrapper>
      <StyledLink
        to={`/products/${id}`}
        style={{ textDecoration: "none", display: "flex" }}
      >
        <Image src={image} alt="" />
        <Title>{title}</Title>
        <Stock>{checkOnStock(offers)}</Stock>
        <PriceRange>{getPriceRange(offers)}</PriceRange>
      </StyledLink>
    </MainWrapper>
  );
}

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  overflow: hidden;
  padding: 1em;
`;

const Image = styled.img`
  display: block;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-height: 100px;
  max-width: 100%;
  overflow: hidden;
  width: auto;
`;

const Title = styled.h3`
  color: #003f8a;
  display: block;
  font-family: Lato;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
`;

const PriceRange = styled.span`
  color: #e43122;
  display: block;
  font-size: 16px;
  text-decoration: none;
`;

const Stock = styled.span`
  color: #0da500;
  display: block;
  font-size: 12px;
  text-decoration: none;
`;
