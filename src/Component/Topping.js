import React, { Component } from "react";

export default class Topping extends Component {
    state = {
      price: this.props.topping.price,
      buttonFlag: false
    }

    // handleFlag = () => {
    //   this.setState({
    //     buttonFlag: !this.state.buttonFlag
    //   })
    //   if(this.state.buttonFlag === false) {
    //     this.props.handleToppingPrice(this.state.price)
    //   }else {
    //     this.props.handleRemoveTopping(this.state.price)
    //   }
    // }
    handleAdd = () => {
      this.props.handleToppingPrice (this.state.price)
      this.setState({
        buttonFlag: !this.state.buttonFlag
      })      
    }

    handleRemove = () => {
      this.props.handleRemoveTopping(this.state.price)
      this.setState({
        buttonFlag: !this.state.buttonFlag
      }) 
    }


    render() {
    return (
      <div>
      <div className="topping">
        <form>
          <label>
            <input
              type="radio"
              value={this.props.topping.name}
              checked={this.props.selectTopping == this.props.topping}
              className="topping-input"
              onChange={() => this.props.handleSelectTopping(this.props.topping)}
            />
            {this.props.topping.name} - ${this.props.topping.price}.00
          </label>
        </form> 
      </div>
      {this.state.buttonFlag
      ?<button onClick={() => this.handleRemove() }>Remove</button> 
      :<button onClick={() => this.handleAdd()}>Add</button>
      }
      </div>
    );
  }
}


