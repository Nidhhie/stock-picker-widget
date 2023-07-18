import React from "react";
import Loader from "./Loader";

type Props = {
  suggestionList: { "1. symbol": string; "2. name": string }[];
  handleSuggestionClick: (s: string) => void;
  loading: boolean;
  error?: string;
};
const SuggestionsList = ({
  suggestionList,
  handleSuggestionClick,
  loading,
  error
}: Props) => {
  return (
    <div className="relative mx-3">
      <div
        className="absolute w-full
         rounded-b-lg p-3 h-full z-10
         bg-white overflow-scroll
         border border-solid border-purple-300
         border-t-0
         shadow-md
         "
        style={{ minHeight: "300px", height: "50vh", marginTop: -3 }}
      >
        {loading ? (
          <Loader />
        ) : error ? (
          <h2 className="text-center py-3 font-bold text-slate-700">
            {" "}
            {error}{" "}
          </h2>
        ) : (
          suggestionList.map((stock, idx) => {
            return (
              <div
                className="flex text-black"
                onClick={() => handleSuggestionClick(stock["1. symbol"])}
                key={idx}
              >
                <div className="font-bold w-1/4 pb-1 break-words">
                  {stock["1. symbol"]}
                </div>
                <div className="w-3/4">{stock["2. name"]}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SuggestionsList;
