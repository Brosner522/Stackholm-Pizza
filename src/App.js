import "./App.css";
import HomePage from "./Component/HomePage";
import React, { Component } from "react";
import PizzaDetail from "./Component/PizzaDetail";
import Order from "./Component/Order";
import Login from "./Component/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    pizzas: [],
    selectPizza: {},
    toppings: [],
    customers: [],
    loginUser: {},
  };

  selectPizzaHandle = (pizzaObj, props) => {
    this.setState({
      selectPizza: pizzaObj,
    });
    props.history.push("/pizzaDetail");
  };

  handleHome = (props) => {
    props.history.push("/");
  };

  handleLoginUser = (loginUserObj) => {
    this.setState({
      loginUser: loginUserObj,
    });
  };

  handleClickSignOut = (props) => {
    this.setState({
      loginUser: {}
    })
    props.history.push("/")
  }

  componentDidMount() {
    fetch("http://localhost:9292/pizzas")
      .then((res) => res.json())
      .then((pizzas) => this.setState({ pizzas }));

    fetch("http://localhost:9292/topping")
      .then((res) => res.json())
      .then((toppings) => this.setState({ toppings }));

    fetch("http://localhost:9292/customer")
      .then((res) => res.json())
      .then((customers) => this.setState({ customers }));
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <div>
                  <HomePage
                    {...props}
                    pizzas={this.state.pizzas}
                    toppings={this.state.toppings}
                    selectPizza={this.selectPizzaHandle}
                    loginUser={this.state.loginUser}
                    handleClickSignOut={this.handleClickSignOut}
                  />
                </div>
              )}
            />

            <Route
              exact
              path="/pizzaDetail"
              component={(props) => (
                <div>
                  <PizzaDetail
                    {...props}
                    pizza={this.state.selectPizza}
                    home={this.handleHome}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/order"
              component={(props) => (
                <div>
                  <Order
                    {...props}
                    pizza={this.state.selectPizza}
                    topping={this.state.toppings}
                    home={this.handleHome} 
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/login"
              component={(props) => (
                <div>
                  <Login
                    {...props}
                    customers={this.state.customers}
                    loginUser={this.handleLoginUser}
                  />
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
