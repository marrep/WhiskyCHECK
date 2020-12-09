import BookmarkIcon from "../bookmark/BookmarkIcon";
import convertToEuro from "../../services/convertToEuro";
import getCartImage from "../../services/getCartImage";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export default function CartItemInformation({
  cartItem,
  products,
  bookmarks,
  toggleBookmark,
}) {
  CartItemInformation.propTypes = {
    cartItem: PropTypes.object,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  };

  return (
    <MainWrapper>
      <LeftWrapper>
        <img src={getCartImage(products, cartItem.id)} alt="" />
      </LeftWrapper>
      <CenterWrapper>
        <Price>{convertToEuro(cartItem.price)}</Price>
        <Title>{cartItem.title}</Title>
        <Seller>Versand durch {cartItem.seller}</Seller>
      </CenterWrapper>
      <RightWrapper>
        <BookmarkIcon
          id={cartItem.id}
          bookmarks={bookmarks}
          toggleBookmark={toggleBookmark}
        />
      </RightWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`;

const LeftWrapper = styled.div`
  align-items: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  text-decoration: none;
  width: 30%;

  img {
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-height: 100px;
    max-width: 100%;
    overflow: hidden;
    width: auto;
  }
`;

const CenterWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 50%;
`;

const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const Price = styled.span`
  color: #e43122;
  display: block;
  font-size: 18px;
  text-align: left;
`;

const Seller = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  text-align: left;
`;

const Title = styled.span`
  color: #134085;
  display: block;
  font-size: 14px;
  text-align: left;
`;
