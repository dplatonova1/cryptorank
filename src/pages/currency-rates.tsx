import React from "react";
import { Page } from "../components/page/page";
import { Watchlist } from "../components/watchlist/watchlist";
import { useCurrencies } from "../services/service";

export const CurrencyRates = () => {
  return (
    <Page title={"Watchlist"}>
      <Watchlist />
    </Page>
  );
};
