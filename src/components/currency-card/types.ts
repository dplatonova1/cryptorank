export type CurrencyValue = {
  price: number;
  marketCap: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  percentChange24h: number;
  percentChange7d: number;
  percentChange30d: number;
  percentChange3m: number;
  percentChange6m: number;
};

export type Currency = {
  id: number;
  slug: string;
  symbol: string;
  name: string;
  type: string;
  category: string;
  rank: number;
  volume24hBase: number;
  values: {
    USD: CurrencyValue;
    BTC?: CurrencyValue;
    ETH?: CurrencyValue;
  };
  tokens?: [
    {
      tokenAddress: string;
      platform: {
        id: number;
        slug: string;
        name: string;
      };
    }
  ];
  links?: [
    {
      type: string;
      value: string;
    }
  ];
  circulatingSupply: number;
  totalSupply: number;
  maxSupply?: number;
  lastUpdated: string;
  images: {
    "16x16": string;
    "200x200": string;
    "60x60": string;
  };
};

export type CurrencyCardProps = {
  baseCurrencyQuantity: number;
  baseCurrency: Currency;
  baseCurrencyValue: number;
  quoteCurrencyValue: number;
  quoteCurrency: Currency;
  handleCurrencyChange: (option: Currency) => void;
  currencies: Currency[];
  isBase: boolean;
  setBaseCurrencyQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
