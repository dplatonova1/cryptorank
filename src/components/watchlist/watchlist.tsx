import React from "react";
import { TableComponent } from "../table/table";
import { Currency } from "../currency-card/types";
import { WatchlistContainer } from "./styles";

type WatchlistProps = {
  data: Currency[];
};

export const Watchlist = (props: WatchlistProps) => {
  const { data } = props;
  return (
    <WatchlistContainer>
      <TableComponent data={data} />
    </WatchlistContainer>
  );
};
