import React from "react";
import { Link } from "react-router-dom";
import Bookmark from "../../assets/icons/bookmarkOff.svg";
import Cart from "../../assets/icons/cart.svg";
import Home from "../../assets/icons/home.svg";
import Menu from "../../assets/icons/menu.svg";
import Search from "../../assets/icons/search.svg";
import styled from "styled-components";

export default function Navigation({ bookmarks, cart }) {
  return (
    <FooterWrapper>
      <Link exact to="/">
        <img src={Home} alt="" />
      </Link>
      <Link exact to="/search">
        <img src={Search} alt="" />
      </Link>
      <Link exact to="/cart">
        <FooterCardCounter
          style={{ display: cart.items.length === 0 ? "none" : "inline" }}
        >
          {cart.items.length}
        </FooterCardCounter>
        <img src={Cart} alt="" />
      </Link>
      <Link exact to="/bookmark">
        <FooterBookmarkCounter
          style={{ display: bookmarks.length === 0 ? "none" : "inline" }}
        >
          {bookmarks.length}
        </FooterBookmarkCounter>
        <img src={Bookmark} alt="" />
      </Link>
    </FooterWrapper>
  );
}

export const FooterWrapper = styled.nav`
  width: 100%;
  position: fixed;
  justify-content: space-around;
  height: 10vh;
  font-size: 10px;
  font-family: Lato;
  flex-direction: row;
  display: flex;
  bottom: 0;
  background-color: #f1f1f1;
  align-items: center;
`;

export const FooterCardCounter = styled.span`
  width: 15px;
  text-align: center;
  right: 30%;
  position: fixed;
  height: 15px;
  color: #ffffff;
  bottom: 6%;
  border-radius: 50%;
  background-color: #f70000;

  :link {
    text-decoration: none;
  }
`;

export const FooterBookmarkCounter = styled.span`
  width: 15px;
  text-align: center;
  right: 6%;
  position: fixed;
  height: 15px;
  color: #ffffff;
  bottom: 6%;
  border-radius: 50%;
  background-color: #f70000;

  :link {
    text-decoration: none;
  }
`;
