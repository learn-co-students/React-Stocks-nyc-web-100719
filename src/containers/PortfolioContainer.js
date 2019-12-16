import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolioStocks = () =>{
    let allStocks = this.props.stocks.map(stock => {
      // let {name, ticker, type, price} = {stock}
      stock.inPortfolio = true
      return (
        <div onClick = {() => this.props.removeFromPortfolio(stock)}>
          <Stock stock = {stock} addToPortfolio = {this.props.addToPortfolio} inPortfolio = {stock.inPortfolio}/>
        </div>
      )
    })
    return allStocks
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
