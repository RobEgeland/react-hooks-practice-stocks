import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({filterPrice, filterAlphabet, filterStocks, portStocks, handleClick, stocks, filterPortStock}) {
  return (
    <div>
      <SearchBar filterPrice={filterPrice} filterAlphabet={filterAlphabet} filterStocks={filterStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer handleClick={handleClick} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer filterPortStock={filterPortStock} portStocks={portStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
