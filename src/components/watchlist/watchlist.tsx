import { TableComponent } from "../table/table";
import { WatchlistContainer } from "./styles";
import { useCurrencies } from "../../services/api";
import { usePagination } from "../../hooks/usePagination";
import { useEffect, useState } from "react";
import { initialDataWatchlist } from "../../utils/consts";
import { WatchlistResponse } from "../../types";

export const Watchlist = () => {
  const [currencies, setCurrencies] =
    useState<WatchlistResponse>(initialDataWatchlist);
  const { limit, onPaginationChange, skip, pagination } = usePagination();

  const { data: currenciesData, isLoading } = useCurrencies(limit, skip);
  useEffect(() => {
    if (!isLoading) {
      setCurrencies(currenciesData);
    }
  }, []);

  const pageCount = Math.round(currencies.meta.count / limit);
  if (isLoading) return <p>Is loading</p>;

  return (
    <WatchlistContainer>
      <TableComponent
        data={currencies.data}
        loading={isLoading}
        onPaginationChange={onPaginationChange}
        pageCount={pageCount}
        pagination={pagination}
      />
    </WatchlistContainer>
  );
};
