import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    ownedStocks: [],
    sortBy: "",
    filterType: ""
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => {return resp.json()})
    .then(stockObjs => {
      this.setState({
        allStocks: [...stockObjs]
      })
    })
  }

  componentDidMount = () => {
    this.fetchStocks()
  }

  sortBy = (sortVal) => {
    this.setState({sortBy: sortVal})
  }

  filterBy = (stockType) => {
    stockType = stockType.trim()
    console.log("in filterBy, stockType is: ", stockType)
    this.setState({filterType: stockType})
  }

  addToPortfolio = (stock) => {
    // add selected stock to ownedStock in state
    // setState
    // debugger
    if (!this.state.ownedStocks.forEach(ownedStock => {
      if (ownedStock["id"] === stock["id"]){
        // debugger
        return true
      } else {
      }
    })
    ){
      this.setState({
        ownedStocks: [...this.state.ownedStocks, stock]
      })
    }
  }

  removeFromPortfolio = (stock) => {
    let newOwnedStocks = this.state.ownedStocks
    const isOwned = (ownedStock) => ownedStock["id"] === stock["id"]
    const removeIndex = (newOwnedStocks.findIndex(isOwned))
    newOwnedStocks.splice(removeIndex,1)
    this.setState({ownedStocks:newOwnedStocks})
  }

  getStockList = () => {
    let stocks = this.state.allStocks
    let sortVal = this.state.sortBy
    let filterType = this.state.filterType
    if (sortVal === "Alphabetically") {
      stocks = stocks.sort((a, b) => a["name"] > b["name"])
    } else if (sortVal === "Price") {
      stocks = stocks.sort((a,b) => a["price"] < b["price"])
    }
    if (filterType) {
      console.log(filterType)
      stocks = stocks.filter(stock => stock.type === filterType)
    }
    return stocks
  }

  render() {
    return (
      <div>
        <SearchBar sortBy={this.state.sortBy} radioButtons={this.sortBy} filterType={this.state.filterType} filterChange={this.filterBy}/>

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.getStockList()}
              addToPortfolio={this.addToPortfolio.bind(this)}/>
              {/* why do I have to do this ^ ? */}
            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.ownedStocks}
              removeFromPortfolio={this.removeFromPortfolio.bind(this)}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
