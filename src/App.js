
import './App.css';
import HomePage from "./Component/HomePage";
import React, { Component } from "react";
import PizzaDetail from "./Component/PizzaDetail"
import Order from "./Component/Order"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component { 

  state = {
    pizzas: [],
    selectPizza: {},
    toppings:[]
  }

  selectPizzaHandle = (pizzaObj, props) => {
      this.setState({
        selectPizza:pizzaObj
      })
      props.history.push("/pizzaDetail")
  }

  componentDidMount() {
    fetch("http://localhost:9292/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))

    fetch("http://localhost:9292/topping")
    .then(res => res.json())
    .then(toppings => this.setState({toppings}))
  }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" 
              component = {(props) => (
                <div>
                <HomePage  {...props} pizzas={this.state.pizzas} toppings={this.state.toppings} selectPizza={this.selectPizzaHandle} /> 
                </div>     
              )}
            />

          <Route exact path = "/pizzaDetail" 
              component = {(props) => (
                <div>
                <PizzaDetail  {...props} pizza={this.state.selectPizza} /> 
                </div>     
              )}
            /> 
            <Route exact path = "/order" 
              component = {(props) => (
                <div>
                <Order  {...props} pizza={this.state.selectPizza} topping={this.state.toppings} /> 
                </div>     
              )}
            />     
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;

