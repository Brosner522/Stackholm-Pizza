import React, { Component } from "react";
import Pizza from "./Pizza";

export default class HomePage extends Component {
  handleClickLogin = () => {
    this.props.history.push("/login");
  };


  render() {
    console.log(Object.keys(this.props.loginUser).length)
    return (
      <div>
        <h2>Stackholm Pizza</h2>
        <h3>You might not like us at first but you'll learn to love us!</h3>
        {Object.keys(this.props.loginUser).length === 0 
          ?<button onClick={this.handleClickLogin}>Login</button>
          :<button onClick={() => this.props.handleClickSignOut(this.props)}>Sign out</button>
        } 
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
