import axios from "axios";
import useSWR from "swr";
import { API_KEY, baseURL } from "../utils/consts";

export const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useCurrencies = (limit: number, offset: number) => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}currencies?api_key=${API_KEY}&optionalFields=images&limit=${limit}&offset=${offset}`,
    fetcher
  );
  return { data, isLoading, isError: error };
};

export const useCurrencyList = () => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}currencies?api_key=${API_KEY}&optionalFields=images`,
    fetcher
  );
  return { data, isLoading, isError: error };
};

export const useCurrency = (id: number) => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}currencies/${id}?api_key=${API_KEY}`,
    fetcher
  );
  return { data, isLoading, isError: error };
};
