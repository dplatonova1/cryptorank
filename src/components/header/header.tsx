import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

const HeaderLink = styled(Link)`
  color: #2d3436;
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLink to="/">Converter</HeaderLink>
      <HeaderLink to="/watchlist">Watchlist</HeaderLink>
    </HeaderContainer>
  );
};

export default Header;
