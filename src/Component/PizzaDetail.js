import React, { Component } from "react";
export default class PizzaDetail extends Component {
  handleOrder = () => {
    this.props.history.push("/order");
  };

  render() {
    const { name, image, description, price } = this.props.pizza;
    return (
      <div className="pizza-detail">
        {Object.keys(this.props.pizza).length !== 0 ? (
          <div>
            <button
              className="w-48 btn btn-lg btn-primary"
              id="home"
              onClick={() => this.props.home(this.props)}
            >
              Home{" "}
            </button>
            <button
              className="w-48 btn btn-lg btn-primary"
              id="order"
              onClick={this.handleOrder}
            >
              Place Order
            </button>
            <li className="pizza-name" id="name">
              {name}
            </li>
            <img className="details-pic" alt="pizza" src={image} />
            <li className="pizza-name" id="price">
              Price: ${price}.00
            </li>
            <p className="pizza-name" id="description">
              {description}
            </p>
          </div>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}
