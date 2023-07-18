import React from "react";

type Props = {
  value: string;
  handleChange: (e: any) => void;
  handleSearch: (symbol: string) => void;
};
const SearchBar = ({ value, handleChange, handleSearch }: Props) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value && e.key === "Enter") {
      handleSearch(value);
    }
  };
  const onClickSearchBtn = () => {
    handleSearch(value);
  };
  return (
    <div className="relative mt-4 mx-4">
      <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
            fill="#6D6B6B"
          />
        </svg>
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        aria-label="Search Symbol of the Stocks"
        placeholder="e.g. IBM"
        autoComplete="off"
        autoFocus
        className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50"
      />
      <button
        className={`text-white absolute right-2.5
        bottom-2.5  bg-purple-700 
        hover:bg-purple-800 focus:ring-4 
        focus:outline-none focus:ring-purple-300 
        font-medium rounded-lg text-sm px-4 py-2
        ${!value ? "opacity-40" : ""}
        `}
        onClick={onClickSearchBtn}
        disabled={!value}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
