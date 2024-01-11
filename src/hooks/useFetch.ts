import useSWR from "swr";
import { fetcher } from "../services/api";

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};
