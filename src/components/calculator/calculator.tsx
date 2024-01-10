import React, { useEffect, useState } from "react";
import { ButtonStyled, CalculatorContainer } from "./styles";
import { useCurrencies, useCurrency } from "../../services/service";
import CurrencyCard from "../currency-card/currency-card";
import { ExchangeAnimation } from "../exchange-animation/exchange-animation";
import { Currency } from "../currency-card/types";

const initialData: Currency[] = [
  {
    id: 1,
    rank: 1,
    slug: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    category: "Currency",
    type: "coin",
    volume24hBase: 360703.8609,
    circulatingSupply: 19593843,
    totalSupply: 21000000,
    maxSupply: 21000000,
    images: {
      "16x16":
        "https://img.api.cryptorank.io/coins/icon.bitcoin1524754012028.png",
      "200x200": "https://img.api.cryptorank.io/coins/bitcoin1524754012028.png",
      "60x60":
        "https://img.api.cryptorank.io/coins/60x60.bitcoin1524754012028.png",
    },
    values: {
      USD: {
        price: 46826.94561593161,
        volume24h: 16890660077,
        high24h: 47185.54659305545,
        low24h: 44894.319459602666,
        marketCap: 917519820568.1023,
        percentChange24h: 4.0392,
        percentChange7d: 4.0944,
        percentChange30d: 6.2595,
        percentChange3m: 70.8703,
        percentChange6m: 52.9331,
      },
    },
    lastUpdated: "2024-01-09T16:34:31.573Z",
  },
  {
    id: 3,
    rank: 2,
    slug: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    category: "Chain",
    type: "coin",
    volume24hBase: 2446375.9017,
    circulatingSupply: 120183957,
    totalSupply: 120183957,
    images: {
      "16x16":
        "https://img.api.cryptorank.io/coins/icon.ethereum1524754015525.png",
      "200x200":
        "https://img.api.cryptorank.io/coins/ethereum1524754015525.png",
      "60x60":
        "https://img.api.cryptorank.io/coins/60x60.ethereum1524754015525.png",
    },
    values: {
      USD: {
        price: 2251.517295694305,
        volume24h: 5508057654,
        high24h: 2357.680638531065,
        low24h: 2248.258693294058,
        marketCap: 270596257850.48065,
        percentChange24h: -0.7593,
        percentChange7d: -4.3748,
        percentChange30d: -4.6453,
        percentChange3m: 43.5798,
        percentChange6m: 19.8606,
      },
    },
    lastUpdated: "2024-01-09T16:34:31.573Z",
  },
];

type CalculatorProps = {
  data: Currency[];
};

export const Calculator = (props: CalculatorProps) => {
  const { data } = props;

  const [baseCurrency, setbaseCurrency] = useState<Currency>(initialData[0]);
  const [quoteCurrency, setquoteCurrency] = useState<Currency>(initialData[1]);
  const [baseCurrencyQuantity, setBaseCurrencyQuantity] = useState(1);
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(
    initialData[0].values.USD.price
  );
  const [quoteCurrencyValue, setQuoteCurrencyValue] = useState(
    initialData[1].values.USD.price
  );
  const {
    data: quoteCurrencyData,
    isLoading: isQuoteCurrencyDataLoading,
    isError: isQuoteCurrencyDataError,
  } = useCurrency(quoteCurrency.id);
  const {
    data: baseCurrencyData,
    isLoading: isBaseCurrencyDataLoading,
    isError: isBaseCurrencyDataError,
  } = useCurrency(baseCurrency.id);

  const handlequoteCurrencyChange = (option: Currency) => {
    setquoteCurrency(option);
    setQuoteCurrencyValue(quoteCurrencyData.data.values.USD.price);
  };

  const handlebaseCurrencyChange = (option: Currency) => {
    setbaseCurrency(option);
    setBaseCurrencyValue(baseCurrencyData.data.values.USD.price);
  };

  const handleBaseCurrencyQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBaseCurrencyQuantity(Number(event.target.value));
  };

  const toggleCurrencies = () => {
    setquoteCurrency(baseCurrency);
    setbaseCurrency(quoteCurrency);
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
            baseCurrencyValue={baseCurrencyValue}
            handleCurrencyChange={handlebaseCurrencyChange}
            currencies={data}
            setBaseCurrencyQuantity={handleBaseCurrencyQuantity}
            quoteCurrencyValue={quoteCurrencyValue}
          />
          <ButtonStyled onClick={toggleCurrencies}>
            <ExchangeAnimation />
          </ButtonStyled>
          <CurrencyCard
            baseCurrencyQuantity={baseCurrencyQuantity}
            isBase={false}
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
            baseCurrencyValue={baseCurrencyValue}
            handleCurrencyChange={handlequoteCurrencyChange}
            currencies={data}
            setBaseCurrencyQuantity={handleBaseCurrencyQuantity}
            quoteCurrencyValue={quoteCurrencyValue}
          />
        </>
      )}
    </CalculatorContainer>
  );
};
