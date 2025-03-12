import React from "react";
import "./StockItem.css";

const StockItem = ({ item, onClick, darkMode }) => {
  return (
    <div
      className={`result-item ${darkMode ? "dark-mode" : ""}`}
      onClick={onClick}
    >
      <div className="stock-logo">
        <img
          src={`src/assets/logos/${item.ticker}.png`}
          alt={item.ticker}
          className="logo-image"
        />
      </div>
      <div className="stock-info">
        <div className="stock-ticker">{item.ticker}</div>
        <div className="stock-name">{item.company}</div>
      </div>
      <div className="stock-price">${item.price}</div>
    </div>
  );
};

export default StockItem;
