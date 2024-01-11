import type { Currency } from "../../types";

export type CurrencyCardProps = {
  baseCurrencyQuantity: number;
  baseCurrency: Currency;
  quoteCurrency: Currency;
  handleCurrencyChange: (option: Currency) => void;
  currencies: Currency[];
  isBase: boolean;
  isLoading: boolean;
  setBaseCurrencyQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
