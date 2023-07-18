const BASE_URL = "https://www.alphavantage.co";
const API_KEY = "FM1HOSSL32L3UH3I";

export const getStocksBySymbol = async (symbol: string, timestamp: number) => {
  const url = `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`;
  const res = await fetch(url);
  let response = await res.json();
  if (response["Information"]) {
    throw new Error(response["Information"]);
  }
  return { ...response, timestamp };
};

export const getStockDetails = async (symbol: string) => {
  const url = `${BASE_URL}/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;

  const res = await fetch(url);
  const response = await res.json();
  if (Object.keys(response).length === 0) {
    throw new Error("Stock Not Found!");
  }
  if (response["Note"] || response["Information"]) {
    throw new Error(response["Note"] || response["Information"]);
  }
  return response;
};

export const getIntraDayStocks = async (symbol: string) => {
  const url = `${BASE_URL}/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const chartData = data["Time Series (5min)"] ?? {};
  const dateList = Object.keys(chartData).sort((a: string, b: string) =>
    new Date(a) < new Date(b) ? 1 : -1
  );
  return dateList.map((i) => [new Date(i).valueOf(), +chartData[i]["1. open"]]);
};
