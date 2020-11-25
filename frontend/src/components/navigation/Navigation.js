import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./NavigationStyled";
import Bookmark from "../../assets/bookmark.svg";
import Cart from "../../assets/cart.svg";
import Home from "../../assets/home.svg";
import Menu from "../../assets/menu.svg";
import Search from "../../assets/search.svg";

export default function Navigation() {
  return (
    <FooterWrapper>
      <Link exact to="/">
        <img src={Home} alt="" />
      </Link>
      <Link exact to="/search">
        <img src={Search} alt="" />
      </Link>
      <Link exact to="/cart">
        <img src={Cart} alt="" />
      </Link>
      <Link exact to="/bookmark">
        <img src={Bookmark} alt="" />
      </Link>
      <Link exact to="/menu">
        <img src={Menu} alt="" />
      </Link>
    </FooterWrapper>
  );
}
