import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ButtonStyled = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid #d6d3d1;
  border-radius: 0.8rem;
  background-color: #fafaf9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;
