import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () =>{
    let allStocks = this.props.stocks.map(stock => {
      // let {name, ticker, type, price} = {stock}
      return <Stock stock = {stock} addToPortfolio = {this.props.addToPortfolio}/>
    })
    return allStocks
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
