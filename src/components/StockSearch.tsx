import React from "react";
import SearchBar from "./SearchBar";
import SuggestionsList from "./SuggestionsList";
import useSearch from "./../hooks/useSearch";

const StockSearch = () => {
  const {
    query,
    handleChange,
    handleSearch,
    showSuggestions,
    suggestionsList,
    loading,
    error
  } = useSearch();

  return (
    <section className="search-container" style={{ minWidth: 200 }}>
      <SearchBar
        value={query}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {showSuggestions  && (
        <SuggestionsList
          suggestionList={suggestionsList}
          handleSuggestionClick={handleSearch}
          loading={loading}
          error={error}
        />
      )}
    </section>
  );
};

export default StockSearch;
