import React, { Component } from 'react'

class Stock extends Component {
  
  handleClick = (e) =>{
    console.log(e.target)
    if (!this.props.inPortfolio) {
      this.props.addToPortfolio(this.props.stock)
    }else{
      
    }
  }

  render(){
    return(
      <div>

        <div className="card" onClick = {this.handleClick}>
          <div className="card-body">
            <h5 className="card-title">{
                //Company Name
                this.props.stock.name
              }</h5>
            <p className="card-text">{
                //ticker: stock price
                this.props.stock.price
              }</p>
          </div>
        </div>


      </div>
    )
  }


}


export default Stock
