import React, { useState } from "react";
import styled from "styled-components";
import { CurrencyCardProps } from "./types";

const CurrencyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  padding: 1.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 0.8rem;
`;

const CurrencyValue = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const CurrencyValueInput = styled.input`
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0;
  outline: none;
  border: none;
  width: 50%;
  padding: 0;
`;

const ExchangePrice = styled.p`
  font-size: 1.5rem;
  color: #b2bec3;
  padding: 0;
  margin: 0;
`;

const CurrencyName = styled.select`
  width: 100%;
  padding: 1rem;
  border: 2px solid #b2bec3;
  border-radius: 0.8rem;
  font-size: 1.2rem;
`;

const CurrencyOption = styled.option`
  width: 100%;
  padding: 0.5rem;
  height: min-content;
  border: none;
  outline: none;
  font-size: 1.2rem;
`;
const CurrencyImage = styled.img`
  width: 16px;
  height: 16px;
`;
const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const CurrencyCard = (props: CurrencyCardProps) => {
  const {
    baseCurrencyValue,
    baseCurrencyName,
    quoteCurrencyValue,
    quoteCurrencyName,
    handleCurrencyChange,
    currencies,
    isBase,
    setBaseCurrencyValue,
  } = props;
  return (
    <CurrencyCardContainer>
      <CurrencyWrapper>
        {isBase ? (
          <CurrencyValueInput
            value={baseCurrencyValue}
            onChange={setBaseCurrencyValue}
          />
        ) : (
          <CurrencyValue>{quoteCurrencyValue}</CurrencyValue>
        )}

        {isBase ? (
          <ExchangePrice>
            1 {baseCurrencyName} = {quoteCurrencyValue} {quoteCurrencyName}
          </ExchangePrice>
        ) : (
          <ExchangePrice>
            1 {quoteCurrencyName} = {(1 / quoteCurrencyValue).toPrecision(5)}{" "}
            {baseCurrencyName}
          </ExchangePrice>
        )}
      </CurrencyWrapper>
      <CurrencyName
        value={isBase ? baseCurrencyName : quoteCurrencyName}
        onChange={handleCurrencyChange}
      >
        {currencies.map(({ symbol, name, images }) => {
          return (
            <CurrencyOption value={symbol}>
              <CurrencyImage src={images["60x60"]} alt="currency symbol" />
              {name} {symbol}
            </CurrencyOption>
          );
        })}
      </CurrencyName>
    </CurrencyCardContainer>
  );
};

export default CurrencyCard;
