
import './App.css';
import Navbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import React, { Component } from "react";

class App extends Component { 

  state = {
    pizzas: {},
    customers: {},
    orders: {},
    toppings:{}
  }

  componentDidMount() {
    fetch("http://localhost:9292/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))

 
  
  }

  render() {
    console.log("here")
    return (
      <div className="App">
          <Navbar /> 
          <HomePage pizzas={this.state.pizzas} customers={this.state.customers} orders={this.state.orders} toppings={this.state.toppings} />
      </div>
    );
  }

}

export default App;

