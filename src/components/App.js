import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [portStocks, setPortStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])

  function handleClick(stock)  {
    setPortStocks([...portStocks, stock])
  }

  function filterPortStock(id) {
    const filteredPortStock = portStocks.filter((stock) => stock.id !== id)
    setPortStocks(filteredPortStock)
  }
  

  function filterStocks(e) {
    if( e.target.value === "All") {
      fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(stocksArr => setStocks(stocksArr))
    }else {
      fetch(`http://localhost:3001/stocks?type=${e.target.value}`)
      .then(res => res.json())
      .then(stocksArr => setStocks(stocksArr))
    }
  }

  function filterAlphabet() {
    const copyStocks = [...stocks]
    const filteredStocks = copyStocks.sort(function(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1
      }
      if(nameA > nameB) {
        return 1
      }
      return 0
    })
    setStocks(filteredStocks)
  }


  function filterPrice() {
    const copyStocks = [...stocks]
    const priceFilteredStocks = copyStocks.sort((a, b) => a.price - b.price)
    setStocks(priceFilteredStocks)
  }

  return (
    <div>
      <Header />
      <MainContainer filterPrice={filterPrice} filterAlphabet={filterAlphabet} filterStocks={filterStocks} filterPortStock={filterPortStock} portStocks={portStocks} handleClick={handleClick} stocks={stocks} />
    </div>
  );
}

export default App;
