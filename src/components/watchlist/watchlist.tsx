import { TableComponent } from "../table/table";
import { WatchlistContainer } from "./styles";
import { useCurrencies } from "../../services/api";
import { usePagination } from "../../hooks/usePagination";

export const Watchlist = () => {
  const { limit, onPaginationChange, skip, pagination } = usePagination();
  const { data: currencies, isLoading } = useCurrencies(limit, skip);
  console.log(limit, skip);
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
