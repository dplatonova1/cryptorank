import React from "react";
import { Page } from "../components/page/page";
import { Watchlist } from "../components/watchlist/watchlist";
import { useCurrencies } from "../services/service";

export const CurrencyRates = () => {
  const { data: currencies, isLoading, isError } = useCurrencies();
  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Page title={"Watchlist"}>
      <Watchlist data={currencies.data} />
    </Page>
  );
};
