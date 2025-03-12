import React from "react";
import "./SearchResults.css";
import StockItem from "../StockItem/StockItem";

const SearchResults = ({
  query,
  results,
  recentSearches,
  onItemClick,
  darkMode,
}) => {
  return (
    <div className="search-results">
      {query === "" ? (
        <>
          {recentSearches.length > 0 && (
            <div className="result-section">
              <div className="section-title">Recent</div>
              {recentSearches.map((item, index) => (
                <StockItem
                  key={`recent-${index}`}
                  item={item}
                  onClick={() => onItemClick(item)}
                  darkMode={darkMode}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="result-section">
          <div className="section-title">Best Matches</div>
          {results.length > 0 ? (
            results.map((item, index) => (
              <StockItem
                key={`result-${index}`}
                item={item}
                onClick={() => onItemClick(item)}
                darkMode={darkMode}
              />
            ))
          ) : (
            <div className="no-results">No matches found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
