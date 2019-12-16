import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // state = {
  //   stocks: []
  // }

  createStockCards = () => {
    let newStocks = this.props.stocks
    return newStocks.map(stock => {
      return <Stock {...stock} handleClick={ (stock) => this.props.addToPortfolio(stock)}/>
    })
  }

  // componentDidMount = () => {
  //   this.setState({stocks: this.props.stocks})
  // }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {console.log('Props: ', this.props.stocks)}
          {console.log('State: ', this.state)}
          {this.createStockCards()}
      </div>
    );
  }

}

export default StockContainer;
