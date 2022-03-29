import React from "react";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer({portStocks, filterPortStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portStocks.map((stock) => <PortfolioStock filterPortStock={filterPortStock} id={stock.id} ticker={stock.ticker} name={stock.name} price={stock.price} key={stock.id} />)
      }
    </div>
  );
}

export default PortfolioContainer;
