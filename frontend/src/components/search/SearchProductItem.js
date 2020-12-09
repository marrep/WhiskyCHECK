import { Link } from "react-router-dom";
import BookmarkIcon from "../bookmark/BookmarkIcon";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
  countOffers,
  getPriceRange,
  getFastestDeliveryDay,
  checkOnStock,
} from "../../services/helpers";

export default function SearchProductItem({
  title,
  image,
  offers,
  id,
  toggleBookmark,
  bookmarks,
}) {
  SearchProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    offers: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
  };

  return (
    <MainWrapper>
      <StyledLink
        to={`/products/${id}`}
        style={{ textDecoration: "none", display: "flex" }}
      >
        <LeftWrapper>
          <Image src={image} alt="" />
        </LeftWrapper>
        <CenterWrapper>
          <Title>{title}</Title>
          <Offers>{countOffers(offers)}</Offers>
          <Stock>{checkOnStock(offers)}</Stock>
          <PriceRange>{getPriceRange(offers)}</PriceRange>
          <Delivery>{getFastestDeliveryDay(offers)}</Delivery>
        </CenterWrapper>
      </StyledLink>
      <RightWrapper>
        <BookmarkIcon
          id={id}
          toggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
        />
      </RightWrapper>
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
  border-bottom: 1px solid #dadbdc;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 1em;
  text-decoration: none;
  width: 100%;
`;

const LeftWrapper = styled.div`
  align-items: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  width: 30%;
`;

const CenterWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow: hidden;
  padding: 1em;
  text-decoration: none;
  width: 50%;
`;

const RightWrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  text-decoration: none;
  width: 20%;
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

const Title = styled.span`
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

const Offers = styled.span`
  color: #575757;
  display: block;
  font-size: 14px;
  font-weight: 200;
  text-decoration: none;
`;

const Stock = styled.span`
  color: #0da500;
  display: block;
  font-size: 12px;
  text-decoration: none;
`;

const Delivery = styled.span`
  color: #575757;
  display: block;
  font-size: 14px;
  text-decoration: none;
`;
