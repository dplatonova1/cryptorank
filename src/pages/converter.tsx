import React, { useState } from "react";

import { Page } from "../components/page/page";
import { Calculator } from "../components/calculator/calculator";
import { useCurrencyList } from "../services/service";

export const Converter = () => {
  const { data: currencies, isLoading, isError } = useCurrencyList();
  if (isError) return <div>Error fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Page title={"Converter calculator"}>
      <Calculator data={currencies.data} />
    </Page>
  );
};
