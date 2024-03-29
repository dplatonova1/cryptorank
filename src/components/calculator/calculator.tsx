import React, { useEffect, useState } from "react";
import { ButtonStyled, CalculatorContainer } from "./styles";
import { useCurrency } from "../../services/api";
import CurrencyCard from "../currency-card/currency-card";
import { ExchangeAnimation } from "../exchange-animation/exchange-animation";
import type { Currency } from "../../types";
import { CalculatorProps } from "./types";
import { initialData } from "../../utils/consts";

export const Calculator = (props: CalculatorProps) => {
  const { data } = props;
  const [baseCurrency, setBaseCurrency] = useState<Currency>(initialData[0]);
  const [quoteCurrency, setQuoteCurrency] = useState<Currency>(initialData[1]);
  const [baseCurrencyQuantity, setBaseCurrencyQuantity] = useState(1);

  const { data: quoteCurrencyData, isLoading: isQuoteCurrencyDataLoading } =
    useCurrency(quoteCurrency.id);

  const { data: baseCurrencyData, isLoading: isBaseCurrencyDataLoading } =
    useCurrency(baseCurrency.id);

  useEffect(() => {
    if (!isQuoteCurrencyDataLoading && !isBaseCurrencyDataLoading) {
      setBaseCurrency(baseCurrencyData.data);
      setQuoteCurrency(quoteCurrencyData.data);
    }
  }, []);

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
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
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
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
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
