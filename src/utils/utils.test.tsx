import { calculateHistoricalPrice } from "./utils";
describe("calculateHistoricalPrice", () => {
  it("should return the correct historical price", () => {
    let percentChange = 5.25;
    let currentPrice = 100;
    let expectedHistoricalPrice = 94.75;

    let result = calculateHistoricalPrice(percentChange, currentPrice);
    expect(result).toBe(expectedHistoricalPrice);
  });

  it("should handle floating-point precision issues", () => {
    let percentChange = 5.256789;
    let currentPrice = 100;
    let expectedHistoricalPrice = 94.753211;

    let result = calculateHistoricalPrice(percentChange, currentPrice);
    expect(result).toBe(expectedHistoricalPrice);
  });

  it("should return 0 if the current price is 0", () => {
    let percentChange = 5.25;
    let currentPrice = 0;
    let expectedHistoricalPrice = 0;

    let result = calculateHistoricalPrice(percentChange, currentPrice);
    expect(result).toBe(expectedHistoricalPrice);
  });
});
