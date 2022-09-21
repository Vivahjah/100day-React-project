import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const APIURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((res) => setCoins(res))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //fitering the coins
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">Search a Currency</div>
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="coin-input"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return <Coin key={coin.id} {...coin} />;
      })}
    </div>
  );
}

export default App;
