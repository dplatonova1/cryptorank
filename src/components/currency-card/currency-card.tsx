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
  } = props;

  const [value, setValue] = useState(isBase ? baseCurrency : quoteCurrency);

  const exchangeRate = useMemo(() => {
    return Math.round(
      baseCurrency.values.USD.price / quoteCurrency.values.USD.price
    );
  }, [baseCurrency.values.USD.price, quoteCurrency.values.USD.price]);
  const exchangeRateQuote = useMemo(() => {
    return Math.round(
      quoteCurrency.values.USD.price / baseCurrency.values.USD.price
    );
  }, [baseCurrency.values.USD.price, quoteCurrency.values.USD.price]);

  const quoteCurrencyBasedOnQuantity = useMemo(() => {
    return baseCurrencyQuantity * exchangeRate;
  }, [baseCurrencyQuantity, exchangeRate]);

  return (
    <CurrencyCardContainer>
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
            1 {quoteCurrency.symbol} = {exchangeRateQuote} {baseCurrency.symbol}
          </ExchangePrice>
        )}
      </CurrencyWrapper>
      <Select
        value={value}
        setValue={setValue}
        options={currencies}
        onSelect={handleCurrencyChange}
      ></Select>
    </CurrencyCardContainer>
  );
};

export default CurrencyCard;
