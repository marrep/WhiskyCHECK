import React from "react";
import { HeaderBar } from "./HeaderStyled";
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <HeaderBar>
      <img src={Logo} alt="React Logo" />
    </HeaderBar>
  );
}
