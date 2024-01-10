import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "./images/dropdown-chevron.svg";

export const CurrencySelectBox = styled.div`
  width: 100%;
  border: 2px solid #aaa69d;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
`;

export const CurrencyName = styled.p`
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0;
  color: #78716c;
`;

export const CurrencyNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CurrencyOption = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  margin: 0;
  color: #78716c;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const CurrencyImage = styled.img`
  width: 16px;
  height: 16px;
`;
export const Options = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background-color: #fafaf9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 0.8rem;
  border: 2px solid #aaa69d;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 20vh;
`;
export interface ArrowIconStyledProps {
  isOpen: boolean;
}
export const ArrowIconStyled = styled(ArrowIcon)<ArrowIconStyledProps>`
  width: 1.5rem;
  rotate: 180deg;
  justify-self: end;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      rotate: 0deg;
    `}
`;
