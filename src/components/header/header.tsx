import React from "react";
import { HeaderContainer, HeaderLink } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLink to="/">Converter</HeaderLink>
      <HeaderLink to="/watchlist">Watchlist</HeaderLink>
    </HeaderContainer>
  );
};

