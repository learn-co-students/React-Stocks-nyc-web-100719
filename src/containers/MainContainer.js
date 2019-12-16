import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stocks from '../data'

class MainContainer extends Component {
	
	state = {
		stocks: [...Stocks.stocks],
		displayStocks: [...Stocks.stocks],
		portfolio: []
	}

	updatePortfolio = (stock) =>{
	this.setState({
		portfolio: [...this.state.portfolio, stock]
	})
	}

	addToPortfolio = (stock) =>{
		this.updatePortfolio(stock)

	}

	removeFromPortfolio = (stock) =>{
	// debugger
	console.log(this.state.portfolio)
	this.setState({
		portfolio: this.state.portfolio.filter(stk => stk !== stock)
	})
	}

	filterStocks = (type) =>{
		// console.log(type)
		if (type !== "All") {
			this.setState({
				displayStocks: this.state.stocks.filter(stock => stock.type === type)
			})
		}else{
			this.setState({
				displayStocks: this.state.stocks
			})
		}
	}

	sortStocks = (e) =>{
		console.log(e.target.value)
		
	}

	render() {

	return (
		<div>
		<SearchBar filterStocks = {this.filterStocks} sortStocks = {this.sortStocks} />

			<div className="row">
			<div className="col-8">

				<StockContainer stocks = {this.state.displayStocks} addToPortfolio = {this.addToPortfolio}/>

			</div>
			<div className="col-4">

				<PortfolioContainer stocks = {this.state.portfolio} removeFromPortfolio = {this.removeFromPortfolio} />

			</div>
			</div>
		</div>
	);
	}

}

export default MainContainer;
