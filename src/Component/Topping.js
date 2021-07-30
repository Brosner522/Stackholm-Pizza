import React, { Component } from "react";

export default class Topping extends Component {
  state = {
    price: this.props.topping.price,
    buttonFlag: false,
  };

  handleAdd = () => {
    this.props.handleToppingPrice(this.state.price);
    this.setState({
      buttonFlag: !this.state.buttonFlag,
    });
  };

  handleRemove = () => {
    this.props.handleRemoveTopping(this.state.price);
    this.setState({
      buttonFlag: !this.state.buttonFlag,
    });
  };

  render() {
    return (
      <div className="topping-top">
        <div className="topping">
          <form className="topping-form">
            <label>
              <input
                type="radio"
                value={this.props.topping.name}
                checked={this.props.selectTopping === this.props.topping}
                className="topping-input"
                onChange={() =>
                  this.props.handleSelectTopping(this.props.topping)
                }
              />
              {this.props.topping.name} - ${this.props.topping.price}.00
            </label>
          </form>
        </div>
        {this.state.buttonFlag ? (
          <button
            className="w-48 btn btn-lg btn-primary"
            id="button"
            onClick={() => this.handleRemove()}
          >
            Remove
          </button>
        ) : (
          <button
            className="w-48 btn btn-lg btn-primary"
            id="button"
            onClick={() => this.handleAdd()}
          >
            Add
          </button>
        )}
      </div>
    );
  }
}
