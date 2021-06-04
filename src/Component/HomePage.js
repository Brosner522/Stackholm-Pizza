import React, { Component } from "react";
import Pizza from "./Pizza";

export default class HomePage extends Component {
  handleClickLogin = () => {
    this.props.history.push("/login");
  };


  render() {
    console.log(Object.keys(this.props.loginUser).length)
    return (
      <div className="container">
        <div className="header">
        <h2 id="title">Welcome To Stackholm Pizza</h2>
        <h3 id="sub-title">One bite and you're hooked, guaranteed!</h3>
        </div>
        {Object.keys(this.props.loginUser).length === 0 
          ?<button className="w-48 btn btn-lg btn-primary" onClick={this.handleClickLogin}>Login</button>
          :<button onClick={() => this.props.handleClickSignOut(this.props)}>Sign out</button>
        }
        <br />
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
