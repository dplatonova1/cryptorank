import React from "react";
import { TableComponent } from "./table/table";
import { Currency } from "../currency-card/types";

type WatchlistProps = {
  data: Currency[];
};

export const Watchlist = (props: WatchlistProps) => {
  const { data } = props;
  return <TableComponent data={data} />;
};
