import React from "react";
import Stock from "./Stock";

function StockContainer({handleClick, stocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => <Stock handleClick={handleClick} key={stock.id} stock={stock} ticker={stock.ticker} name={stock.name} price={stock.price} />)}
    </div>
  );
}

export default StockContainer;
