  import React from 'react'

const Coin = ({image, symbol, name, current_price : price, market_cap : marketCap, price_change_24h: priceChange, total_volume : volume}) => {
  return (
     <div className="coin-container">
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume}</p>
                <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange.toFixed(2)}</p>
                <p className="coin-marketcap">Mkt Cap : ${marketCap}</p>
            </div>
        </div>
     </div>
  )
}

export default Coin 