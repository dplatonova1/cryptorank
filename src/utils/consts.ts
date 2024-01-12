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

export const initialDataWatchlist = {
  data: [
    {
      id: 5,
      rank: 6,
      slug: "ripple",
      name: "XRP",
      symbol: "XRP",
      category: "Currency",
      type: "coin",
      volume24hBase: 1318037402.1002,
      circulatingSupply: 54266821529,
      totalSupply: 99988013070,
      maxSupply: 100000000000,
      images: {
        "16x16": "https://img.cryptorank.io/coins/icon.xrp1634717634479.png",
        "200x200": "https://img.cryptorank.io/coins/xrp1634717634479.png",
        "60x60": "https://img.cryptorank.io/coins/60x60.xrp1634717634479.png",
      },
      values: {
        USD: {
          price: 0.597142097539,
          volume24h: 787055618,
          high24h: 0.614823644221,
          low24h: 0.59643520823,
          marketCap: 32405003634.601627,
          percentChange24h: -2.4354,
          percentChange7d: 5.3117,
          percentChange30d: -3.8535,
          percentChange3m: 22.7145,
          percentChange6m: -17.2178,
        },
      },
      lastUpdated: "2024-01-12T15:35:07.824Z",
    },
    {
      id: 5487,
      rank: 7,
      slug: "usdcoin",
      name: "USDC",
      symbol: "USDC",
      category: "Stablecoin",
      type: "token",
      volume24hBase: 4006965046.7349,
      circulatingSupply: 25243340972,
      totalSupply: 25248515679,
      images: {
        "16x16":
          "https://img.cryptorank.io/coins/icon.usd coin1634317395959.png",
        "200x200": "https://img.cryptorank.io/coins/usd coin1634317395959.png",
        "60x60":
          "https://img.cryptorank.io/coins/60x60.usd coin1634317395959.png",
      },
      values: {
        USD: {
          price: 1.000208948495,
          volume24h: 4007802296,
          high24h: 1.000318247924,
          low24h: 0.99975451839,
          marketCap: 25248615530.104874,
          percentChange24h: -0.0044,
          percentChange7d: 0.014,
          percentChange30d: 0.0017,
          percentChange3m: -0.0048,
          percentChange6m: -0.1435,
        },
      },
      lastUpdated: "2024-01-12T15:35:07.824Z",
    },
    {
      id: 171882,
      rank: 8,
      slug: "lido-staked-ether",
      name: "Lido Staked Ether",
      symbol: "STETH",
      type: "token",
      volume24hBase: 7755.6739,
      circulatingSupply: 9314269,
      totalSupply: 9314496,
      images: {
        "16x16":
          "https://img.cryptorank.io/coins/icon.lido_staked_ether1679383383015.png",
        "200x200":
          "https://img.cryptorank.io/coins/lido_staked_ether1679383383015.png",
        "60x60":
          "https://img.cryptorank.io/coins/60x60.lido_staked_ether1679383383015.png",
      },
      values: {
        USD: {
          price: 2671.036635024322,
          volume24h: 20715689,
          high24h: 2707.615027817388,
          low24h: 2577.833669518134,
          marketCap: 24878753727.47136,
          percentChange24h: 1.1386,
          percentChange7d: 19.2269,
          percentChange30d: 20.5735,
          percentChange3m: 72.1986,
          percentChange6m: 38.1586,
        },
      },
      lastUpdated: "2024-01-12T15:35:07.824Z",
    },
    {
      id: 7,
      rank: 9,
      slug: "cardano",
      name: "Cardano",
      symbol: "ADA",
      category: "Chain",
      type: "coin",
      volume24hBase: 711557757.1619,
      circulatingSupply: 35062455755,
      totalSupply: 45000000000,
      maxSupply: 45000000000,
      images: {
        "16x16":
          "https://img.cryptorank.io/coins/icon.cardano1524754132195.png",
        "200x200": "https://img.cryptorank.io/coins/cardano1524754132195.png",
        "60x60":
          "https://img.cryptorank.io/coins/60x60.cardano1524754132195.png",
      },
      values: {
        USD: {
          price: 0.575361980619,
          volume24h: 409403280,
          high24h: 0.597161208252,
          low24h: 0.574173481363,
          marketCap: 20173603988.562855,
          percentChange24h: -2.4608,
          percentChange7d: 7.7782,
          percentChange30d: -8.5588,
          percentChange3m: 133.8485,
          percentChange6m: 74.5948,
        },
      },
      lastUpdated: "2024-01-12T15:35:07.824Z",
    },
    {
      id: 21076,
      rank: 10,
      slug: "avalanche",
      name: "Avalanche",
      symbol: "AVAX",
      category: "Chain",
      type: "coin",
      volume24hBase: 15288863.8358,
      circulatingSupply: 366634112,
      totalSupply: 434666960,
      maxSupply: 720000000,
      images: {
        "16x16":
          "https://img.cryptorank.io/coins/icon.avalanche1629705441155.png",
        "200x200": "https://img.cryptorank.io/coins/avalanche1629705441155.png",
        "60x60":
          "https://img.cryptorank.io/coins/60x60.avalanche1629705441155.png",
      },
      values: {
        USD: {
          price: 37.78242484857,
          volume24h: 577650348,
          high24h: 40.434940031266,
          low24h: 38.264540509475,
          marketCap: 13852325783.562197,
          percentChange24h: -6.0379,
          percentChange7d: 4.2317,
          percentChange30d: -4.6932,
          percentChange3m: 312.7532,
          percentChange6m: 157.8605,
        },
      },
      lastUpdated: "2024-01-12T15:35:07.824Z",
    },
  ],
  meta: {
    count: 6151,
  },
  status: {
    time: "2024-01-12T15:35:30.362Z",
    success: true,
    code: 200,
    message: "OK",
    responseTime: 43,
    creditsCost: 2,
  },
};

export const pageSizes = [5, 10, 20, 30, 40, 50];
export const API_KEY =
  "66d8d5affdd56709805acf96964ef98b54d9ea1d77b7112ca9e8ce492e0b";
export const baseURL = "https://api.cryptorank.io/v1";
