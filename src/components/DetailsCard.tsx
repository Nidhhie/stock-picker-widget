import React from "react";
export type Stock = {
  Name: string;
  Symbol: string;
  Currency: string;
  Description: string;
  MarketCapitalization: string;
  SharesOutstanding: string;
  ProfitMargin: string;
  Industry: string;
  PERatio: string;
};

const DetailsCard = ({ stock }: { stock: Stock }) => {
  const {
    Name,
    Symbol,
    Currency,
    Description,
    MarketCapitalization,
    SharesOutstanding,
    ProfitMargin,
    Industry,
    PERatio
  } = stock || {};

  const getSharePrice = () => {
    return Number(MarketCapitalization) / Number(SharesOutstanding);
  };

  const getProfitFromPercent = () => {
    const price = getSharePrice();
    return (price * Number(ProfitMargin)).toFixed(2);
  };

  return (
    <div className="px-8 py-4 dark:text-black">
      <div className="text-3xl font-bold">
        {Name} ({Symbol})
      </div>
      <div style={{ fontSize: 10 }}>
        {" "}
        <b className="text-gray-700">INDUSTRY:</b> {Industry}{" "}
      </div>
      <hr className="h-1 my-2 bg-gray-200 border-0 " />

      <div className="flex items-end my-2">
        <div className="font-bold mr-1 text-5xl">
          {getSharePrice().toFixed(2)}
        </div>
        <div>{Currency}</div>
      </div>

      <div
        className={`flex items-end my-2 ${
          Number(ProfitMargin) > 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        <div className={"font-bold mr-1"}>{getProfitFromPercent()}</div>
        <div className="text-green-400">{Number(ProfitMargin).toFixed(2)}%</div>
      </div>
      <div>
        <div className="mb-2">
          <b>Market Cap</b>
          <p>
            {Currency}{" "}
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3
            }).format(Number(MarketCapitalization))}
          </p>
        </div>
        <div className="mb-2">
          <b>PE Ratio</b>
          <p>{PERatio}</p>
        </div>
        <div className="mb-2">
          <b>Description</b>
          <div className="text-sm">{Description}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
