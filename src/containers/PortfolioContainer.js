import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props.myStocks)
    return (
      
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myStocks.map(stock => {
              return  <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
