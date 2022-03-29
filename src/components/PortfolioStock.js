import React from "react";

function PortfolioStock({filterPortStock, stock, name, price, ticker, id}) {
  
  return (
    <div>
      <div onClick={() => filterPortStock(id)} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default PortfolioStock;
