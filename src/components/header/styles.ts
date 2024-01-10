import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #fafaf9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderLink = styled(Link)`
  color: #aaa69d;
  text-decoration: none;

  &:hover {
    color: #78716c;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;
