import React, { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import CurrencyCard from "../components/currency-card/currency-card";
import { useCurrencies, useExchangeRates } from "../services/service";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
`;

const Calculator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Converter: React.FC = () => {
  const [baseCurrency, setbaseCurrency] = useState("BTC");
  const [quoteCurrency, setquoteCurrency] = useState("USDC");
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);
  const [quoteCurrencyValue, setQuoteCurrencyValue] = useState(44);
  // const {
  //   exchangeRates: quoteCurrencyRates,
  //   isLoading: isLeftLoading,
  //   isError: isLeftError,
  // } = useExchangeRates(quoteCurrency);
  // const {
  //   exchangeRates: baseCurrencyRates,
  //   isLoading: isRightLoading,
  //   isError: isRightError,
  // } = useExchangeRates(baseCurrency);

  const handlequoteCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setquoteCurrency(event.target.value);
  };

  const handlebaseCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setbaseCurrency(event.target.value);
  };

  const handleBaseCurrencyValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBaseCurrencyValue(Number(event.target.value));
  };

  const { data: currencies, isLoading, isError } = useCurrencies();

  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <PageContainer>
      <Title>Converter Calculator</Title>
      <Calculator>
        <CurrencyCard
          isBase={true}
          baseCurrencyName={baseCurrency}
          quoteCurrencyName={quoteCurrency}
          baseCurrencyValue={baseCurrencyValue}
          handleCurrencyChange={handlebaseCurrencyChange}
          currencies={currencies.data}
          setBaseCurrencyValue={handleBaseCurrencyValue}
          quoteCurrencyValue={quoteCurrencyValue}
        />
        <CurrencyCard
          isBase={false}
          baseCurrencyName={baseCurrency}
          quoteCurrencyName={quoteCurrency}
          baseCurrencyValue={baseCurrencyValue}
          handleCurrencyChange={handlequoteCurrencyChange}
          currencies={currencies.data}
          setBaseCurrencyValue={handleBaseCurrencyValue}
          quoteCurrencyValue={quoteCurrencyValue}
        />
      </Calculator>
    </PageContainer>
  );
};

export default Converter;
