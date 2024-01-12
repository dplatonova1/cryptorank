import React, { useState } from "react";
import { ButtonStyled, CalculatorContainer } from "./styles";
import { fetcher, useCurrency } from "../../services/api";
import CurrencyCard from "../currency-card/currency-card";
import { ExchangeAnimation } from "../exchange-animation/exchange-animation";
import type { Currency } from "../../types";
import { CalculatorProps } from "./types";
import { API_KEY, initialData } from "../../utils/consts";
import useSWR from "swr";

export const Calculator = (props: CalculatorProps) => {
  const { data } = props;
  const [baseCurrency, setBaseCurrency] = useState<Currency>(initialData[0]);
  const [quoteCurrency, setQuoteCurrency] = useState<Currency>(initialData[1]);
  const [baseCurrencyQuantity, setBaseCurrencyQuantity] = useState(1);

  const { data: quoteCurrencyData, isLoading: isQuoteCurrencyDataLoading } =
    useCurrency(quoteCurrency.id);

  const { data: baseCurrencyData, isLoading: isBaseCurrencyDataLoading } =
    useCurrency(baseCurrency.id);

  const handleBaseCurrencyQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBaseCurrencyQuantity(Number(event.target.value));
  };

  const toggleCurrencies = () => {
    setQuoteCurrency(baseCurrency);
    setBaseCurrency(quoteCurrency);
  };

  return (
    <CalculatorContainer>
      {data && (
        <>
          <CurrencyCard
            baseCurrencyQuantity={baseCurrencyQuantity}
            isBase={true}
            baseCurrency={baseCurrencyData}
            quoteCurrency={quoteCurrencyData}
            handleCurrencyChange={setBaseCurrency}
            currencies={data}
            setBaseCurrencyQuantity={handleBaseCurrencyQuantity}
            isLoading={isBaseCurrencyDataLoading}
          />
          <ButtonStyled onClick={toggleCurrencies}>
            <ExchangeAnimation />
          </ButtonStyled>
          <CurrencyCard
            baseCurrencyQuantity={baseCurrencyQuantity}
            isBase={false}
            baseCurrency={baseCurrencyData}
            quoteCurrency={quoteCurrencyData}
            handleCurrencyChange={setQuoteCurrency}
            currencies={data}
            setBaseCurrencyQuantity={handleBaseCurrencyQuantity}
            isLoading={isQuoteCurrencyDataLoading}
          />
        </>
      )}
    </CalculatorContainer>
  );
};
