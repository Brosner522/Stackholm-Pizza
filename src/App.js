
import './App.css';
import HomePage from "./Component/HomePage";
import React, { Component } from "react";
import PizzaDetail from "./Component/PizzaDetail"
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
      props.history.push("/PizzaDetail")
  }

  componentDidMount() {
    fetch("http://localhost:9292/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
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

          <Route exact path = "/PizzaDetail" 
              component = {(props) => (
                <div>
                <PizzaDetail  {...props} pizza={this.state.selectPizza} /> 
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

