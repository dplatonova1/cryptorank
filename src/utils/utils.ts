export const calculateHistoricalPrice = (
  percentChange: number,
  currentPrice: number
) => {
  const roundedPercentChange = parseFloat(percentChange.toFixed(2));
  const fractionalChange = roundedPercentChange / 100;
  const historicalPrice = parseFloat(
    (currentPrice * (1 - fractionalChange)).toFixed(2)
  );

  return historicalPrice;
};
