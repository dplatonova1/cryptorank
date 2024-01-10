import axios from "axios";
import useSWR from "swr";

export const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useExchangeRates = (base: string) => {
  const { data, error } = useSWR(
    `https://api.exchangeratesapi.io/latest?base=${base}`,
    fetcher
  );
  return { exchangeRates: data, isLoading: !error && !data, isError: error };
};

export const useCurrencies = (limit: number, offset: number) => {
  const { data, error } = useSWR(
    `https://api.cryptorank.io/v1/currencies?api_key=66d8d5affdd56709805acf96964ef98b54d9ea1d77b7112ca9e8ce492e0b&optionalFields=images&limit=${limit}&offset=${offset}`,
    fetcher
  );
  return { data, isLoading: !error && !data, isError: error };
};

export const useCurrencyList = () => {
  const { data, error } = useSWR(
    `https://api.cryptorank.io/v1/currencies?api_key=66d8d5affdd56709805acf96964ef98b54d9ea1d77b7112ca9e8ce492e0b&optionalFields=images`,
    fetcher
  );
  return { data, isLoading: !error && !data, isError: error };
};

export const useCurrency = (id: number) => {
  const { data, error } = useSWR(
    `https://api.cryptorank.io/v1/currencies/${id}?api_key=66d8d5affdd56709805acf96964ef98b54d9ea1d77b7112ca9e8ce492e0b`,
    fetcher
  );
  return { data, isLoading: !error && !data, isError: error };
};
