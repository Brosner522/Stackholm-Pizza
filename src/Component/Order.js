import React, { Component } from "react";
import Topping from  "./Topping"

export default class Order extends Component {
  state = {
    selectTopping: {},
    toppingPrice: []
  }

  handleSelectTopping = (toppingObj) => {
    this.setState({
      selectTopping: toppingObj
    })
  }

  handleAdd = (price) => {

    this.setState({
      toppingPrice: [...this.state.toppingPrice, price],
    })
  
  }

  handleRemoveTopping = (price) => {
    const newTotalPrice = this.state.toppingPrice.filter(toppingprice => toppingprice !== price)

    this.setState ({
       toppingPrice: newTotalPrice,
    })
  }

  totalPrice = () => {
    return  this.state.toppingPrice.reduce((a, b) => a + b, this.props.pizza.price)
  }

  handlePlaceOrder = () => {
    alert("Thank you for your order!")
    this.props.history.push("/")
  }
  
  render() {
    return( 

      Object.keys(this.props.pizza).length !== 0 
      ? <div className="order">
          <button onClick={() => this.props.home(this.props)}>Home </button>
          <li>{this.props.pizza.name}</li>
          <img src={this.props.pizza.image} />
          <li>Total Price ${this.totalPrice()}.00</li>
          <h2>Please select the topping/s that you would like to add</h2>
  
          {this.props.topping.map((topping) => {
  
            return <Topping topping={topping} key={topping.id} handleSelectTopping={this.handleSelectTopping} selectTopping={this.state.selectTopping}
            handleToppingPrice={this.handleAdd} handleRemoveTopping={this.handleRemoveTopping}/> })}

          <button onClick={this.handlePlaceOrder}>Place Order</button>
        </div>
        :this.props.history.push("/")

    )    
  }
}


