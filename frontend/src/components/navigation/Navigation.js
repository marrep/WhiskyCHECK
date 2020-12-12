import { Link } from "react-router-dom";
import Bookmark from "../../assets/icons/bookmarkOff.svg";
import Cart from "../../assets/icons/cart.svg";
import PropTypes from "prop-types";
import React from "react";
import Search from "../../assets/icons/search.svg";
import styled from "styled-components";

Navigation.propTypes = {
  cart: PropTypes.array,
  bookmarks: PropTypes.array,
};

export default function Navigation({ bookmarks, cart }) {
  return (
    <MainWrapper>
      <Link exact to="/">
        <img src={Search} alt="" />
      </Link>
      <Link exact to="/cart">
        <CartCounter
          style={{ display: cart.items.length === 0 ? "none" : "inline" }}
        >
          {cart.items.length}
        </CartCounter>
        <img src={Cart} alt="" />
      </Link>
      <Link exact to="/bookmark">
        <BookmarkCounter
          style={{ display: bookmarks.length === 0 ? "none" : "inline" }}
        >
          {bookmarks.length}
        </BookmarkCounter>
        <img src={Bookmark} alt="" />
      </Link>
    </MainWrapper>
  );
}

const MainWrapper = styled.nav`
  align-items: center;
  background-color: #f1f1f1;
  bottom: 0;
  display: flex;
  flex-direction: row;
  font-family: Lato;
  font-size: 10px;
  height: 10vh;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`;

const CartCounter = styled.span`
  background-color: #f70000;
  border-radius: 50%;
  bottom: 6%;
  color: #ffffff;
  height: 15px;
  position: fixed;
  right: 43%;
  text-align: center;
  width: 15px;

  :link {
    text-decoration: none;
  }
`;

const BookmarkCounter = styled.span`
  background-color: #f70000;
  border-radius: 50%;
  bottom: 6%;
  color: #ffffff;
  height: 15px;
  position: fixed;
  right: 10%;
  text-align: center;
  width: 15px;

  :link {
    text-decoration: none;
  }
`;
