import { useMemo, useState } from "react";
import { CurrencyCardProps } from "./types";
import {
  CurrencyCardContainer,
  CurrencyValue,
  CurrencyValueInput,
  CurrencyWrapper,
  ExchangePrice,
} from "./styles";
import Select from "../select/select";

const CurrencyCard = (props: CurrencyCardProps) => {
  const {
    baseCurrency,
    quoteCurrency,
    handleCurrencyChange,
    currencies,
    isBase,
    baseCurrencyQuantity,
    setBaseCurrencyQuantity,
    isLoading,
  } = props;

  const value = useMemo(() => {
    return isBase ? baseCurrency : quoteCurrency;
  }, [baseCurrency, isBase, quoteCurrency]);

  const exchangeRate = useMemo(() => {
    return (
      Math.round(
        (baseCurrency.values.USD.price / quoteCurrency.values.USD.price) * 100
      ) / 100
    );
  }, [baseCurrency.values.USD.price, quoteCurrency.values.USD.price]);
  const exchangeRateQuote = useMemo(() => {
    return (
      Math.round(
        (quoteCurrency.values.USD.price / baseCurrency.values.USD.price) * 100
      ) / 100
    );
  }, [baseCurrency.values.USD.price, quoteCurrency.values.USD.price]);

  const quoteCurrencyBasedOnQuantity = useMemo(() => {
    return Math.round(baseCurrencyQuantity * exchangeRate * 100) / 100;
  }, [baseCurrencyQuantity, exchangeRate]);

  return (
    <CurrencyCardContainer>
      {isLoading || (!baseCurrency && !quoteCurrency) ? (
        <ExchangePrice>'Loading...'</ExchangePrice>
      ) : (
        <>
          <CurrencyWrapper>
            {isBase ? (
              <CurrencyValueInput
                value={baseCurrencyQuantity}
                onChange={setBaseCurrencyQuantity}
              />
            ) : (
              <CurrencyValue>{quoteCurrencyBasedOnQuantity}</CurrencyValue>
            )}

            {isBase ? (
              <ExchangePrice>
                1 {baseCurrency.symbol} = {exchangeRate} {quoteCurrency.symbol}
              </ExchangePrice>
            ) : (
              <ExchangePrice>
                1 {quoteCurrency.symbol} = {exchangeRateQuote}{" "}
                {baseCurrency.symbol}
              </ExchangePrice>
            )}
          </CurrencyWrapper>
          <Select
            value={value}
            options={currencies}
            onSelect={handleCurrencyChange}
          ></Select>
        </>
      )}
    </CurrencyCardContainer>
  );
};

export default CurrencyCard;
