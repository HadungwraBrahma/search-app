import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";
import SearchResults from "../SearchResults/SearchResults";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Mock stock data
  const stockData = [
    { ticker: "AAPL", company: "Apple Inc", price: 142 },
    { ticker: "SPOT", company: "Spotify Inc", price: 142 },
    { ticker: "SHOP", company: "Shopify Inc", price: 142 },
    { ticker: "AMZN", company: "Amazon Inc", price: 325 },
    { ticker: "GOOGL", company: "Google Inc", price: 105 },
    { ticker: "TSLA", company: "Tesla Inc", price: 217 },
  ];

  // Filter results based on query
  useEffect(() => {
    if (query) {
      const filteredResults = stockData.filter(
        (item) =>
          item.ticker.toLowerCase().includes(query.toLowerCase()) ||
          item.company.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle clicks outside the search component
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    alert(`You clicked on ${item.company} (${item.ticker})`);
    setQuery("");
    setIsOpen(false);

    // Add to recent searches
    if (!recentSearches.some((search) => search.ticker === item.ticker)) {
      setRecentSearches((prev) => {
        const newSearches = [item, ...prev];
        return newSearches.slice(0, 3); // Keep only 3 recent searches
      });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <button
        className="search-button"
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => {
            inputRef.current?.focus();
          }, 100);
        }}
      >
        Search (Ctrl+K)
      </button>

      <button className="theme-toggle-button" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {isOpen && (
        <div className="search-overlay">
          <div
            className={`search-container ${darkMode ? "dark-mode" : ""}`}
            ref={searchRef}
          >
            <div className="search-input-container">
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <SearchResults
              query={query}
              results={results}
              recentSearches={recentSearches}
              onItemClick={handleItemClick}
              darkMode={darkMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
