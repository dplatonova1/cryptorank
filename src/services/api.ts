import axios from "axios";
import useSWR from "swr";
import { API_KEY, baseURL } from "../utils/consts";

export const useFetcher = (url: string) => {
  const { data, error, isLoading } = useSWR(url, (url) =>
    axios.get(url).then((response) => response.data)
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useCurrencies = (limit: number, offset: number) => {
  return useFetcher(
    `https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}&optionalFields=images&limit=${limit}&offset=${offset}`
  );
};

export const useCurrencyList = () => {
  return useFetcher(
    `https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}&optionalFields=images`
  );
};

export const useCurrency = (id: number) => {
  return useFetcher(`${baseURL}/currencies/${id}?api_key=${API_KEY}`);
};
