import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createStockCards = () => {
    let newStocks = this.props.stocks
    return newStocks.map(stock => {
      return <Stock {...stock} handleClick={ (stock) => this.props.removeFromPortfolio(stock)}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.createStockCards()}
      </div>
    );
  }

}

export default PortfolioContainer;
