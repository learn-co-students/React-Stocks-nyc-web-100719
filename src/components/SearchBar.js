import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortBy==="Alphabetically" ? true : false} onChange={() => props.radioButtons("Alphabetically")}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortBy==="Price" ? true : false} onChange={() => props.radioButtons("Price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterChange(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
