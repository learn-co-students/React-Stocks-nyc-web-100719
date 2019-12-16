import React, {Component} from 'react';

class SearchBar extends Component {
  
  setFilter = (e) =>{
    this.props.filterStocks(e.target.value)
  }

  

  render(){

    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={null} onChange={(e) => this.props.sortStocks(e)}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={(e) => this.props.sortStocks(e)}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.setFilter}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}


export default SearchBar;
