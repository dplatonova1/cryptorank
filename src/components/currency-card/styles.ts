import styled from "styled-components";

export const CurrencyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  padding: 1.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f4;
  border-radius: 0.8rem;
  border: 2px solid #d6d3d1;
  &:hover {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

export const CurrencyValue = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const CurrencyValueInput = styled.input`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  outline: none;
  border: none;
  width: 40%;
  padding: 0;
  background-color: #f5f5f4;
  border-radius: 0.8rem;
  border: 2px solid #d6d3d1;
  padding: 0.6rem 1rem;
`;

export const ExchangePrice = styled.p`
  color: #d6d3d1;
  padding: 0;
  margin: 0;
`;

export const CurrencyName = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #aaa69d;
  border-radius: 0.8rem;
  font-size: 1.2rem;
`;

export const CurrencyOption = styled.option`
  width: 100%;
  padding: 0.5rem;
  height: min-content;
  border: none;
  outline: none;
  font-size: 1.2rem;
`;
export const CurrencyImage = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  height: 3rem;
`;
