import React, { Component } from "react";
export default class Pizza extends Component {
  render() {
    const { name, image } = this.props.pizza;
    return (
      <div className="pizza">
        <li className="pizza-name">{name}</li>
        <img
          className="pizza-pic"
          alt="pizza"
          src={image}
          onClick={() => this.props.selectPizza(this.props.pizza, this.props)}
        />
      </div>
    );
  }
}
