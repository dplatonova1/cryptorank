export const calculateHistoricalPrice = (
  percentChange: number,
  currentPrice: number
) => {
  percentChange = Math.round(percentChange * 100) / 100;
  let fractionalChange = percentChange / 100;
  let historicalPrice = currentPrice / (1 + fractionalChange);
  historicalPrice = Math.round(historicalPrice * 100) / 100;

  return historicalPrice;
};
