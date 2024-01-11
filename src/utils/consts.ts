import type { Currency } from "../types";

export const initialData: Currency[] = [
  {
    id: 1,
    rank: 1,
    slug: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    category: "Currency",
    type: "coin",
    volume24hBase: 360703.8609,
    circulatingSupply: 19593843,
    totalSupply: 21000000,
    maxSupply: 21000000,
    images: {
      "16x16":
        "https://img.api.cryptorank.io/coins/icon.bitcoin1524754012028.png",
      "200x200": "https://img.api.cryptorank.io/coins/bitcoin1524754012028.png",
      "60x60":
        "https://img.api.cryptorank.io/coins/60x60.bitcoin1524754012028.png",
    },
    values: {
      USD: {
        price: 46826.94561593161,
        volume24h: 16890660077,
        high24h: 47185.54659305545,
        low24h: 44894.319459602666,
        marketCap: 917519820568.1023,
        percentChange24h: 4.0392,
        percentChange7d: 4.0944,
        percentChange30d: 6.2595,
        percentChange3m: 70.8703,
        percentChange6m: 52.9331,
      },
    },
    lastUpdated: "2024-01-09T16:34:31.573Z",
  },
  {
    id: 3,
    rank: 2,
    slug: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    category: "Chain",
    type: "coin",
    volume24hBase: 2446375.9017,
    circulatingSupply: 120183957,
    totalSupply: 120183957,
    images: {
      "16x16":
        "https://img.api.cryptorank.io/coins/icon.ethereum1524754015525.png",
      "200x200":
        "https://img.api.cryptorank.io/coins/ethereum1524754015525.png",
      "60x60":
        "https://img.api.cryptorank.io/coins/60x60.ethereum1524754015525.png",
    },
    values: {
      USD: {
        price: 2251.517295694305,
        volume24h: 5508057654,
        high24h: 2357.680638531065,
        low24h: 2248.258693294058,
        marketCap: 270596257850.48065,
        percentChange24h: -0.7593,
        percentChange7d: -4.3748,
        percentChange30d: -4.6453,
        percentChange3m: 43.5798,
        percentChange6m: 19.8606,
      },
    },
    lastUpdated: "2024-01-09T16:34:31.573Z",
  },
];

export const pageSizes = [5, 10, 20, 30, 40, 50];
export const API_KEY =
  "66d8d5affdd56709805acf96964ef98b54d9ea1d77b7112ca9e8ce492e0b";
export const baseURL = "https://api.cryptorank.io/v1/";
