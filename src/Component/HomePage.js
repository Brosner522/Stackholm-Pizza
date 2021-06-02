import React, { Component } from "react";
import Pizza from "./Pizza";

export default class HomePage extends Component {
  handleClickLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <h2>Stackholm Pizza</h2>
        <h3>You might not like us at first but you'll learn to love us!</h3>
        <button onClick={this.handleClickLogin}>Login</button>
        {/* <button>Sign up</button> */}
        {this.props.pizzas.map((pizza) => {
          return (
            <Pizza
              pizza={pizza}
              key={pizza.id}
              history={this.props.history}
              selectPizza={this.props.selectPizza}
            />
          );
        })}
      </div>
    );
  }
}
