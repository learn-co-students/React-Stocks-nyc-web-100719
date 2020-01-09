import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

state = {
  stocks: [],
  myStocks:[]
}

componentDidMount(){
  fetch('http://localhost:3000/stocks')
  .then(resp => resp.json())
  .then(stocks => {
    this.setState({
      stocks: stocks
    })
  })
}

addStock=(stock)=>{
if(!this.state.myStocks.includes(stock)) {
  this.setState({
  myStocks: [...this.state.myStocks, stock]
})
}
}


removeStock=(stock)=>{
    let updated = this.state.myStocks.filter(s => {
          return s !== stock
        })
    this.setState ({ myStocks: updated  })
}

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handleClick={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} handleClick={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
