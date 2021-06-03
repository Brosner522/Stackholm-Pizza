import React, { Component } from "react";
export default class PizzaDetail extends Component { 

    

    handleOrder = () => {
        this.props.history.push("/order")
    }


    render() {
    const {name, image, description, price, topping_id } = this.props.pizza
    return(
        <div>  
             { 
            Object.keys(this.props.pizza).length !== 0 
            ? <div>
            <button onClick={() => this.props.home(this.props)}>Home </button>
            <button onClick={this.handleOrder}>Place Order</button>
            <li>{name}</li>
            <img src={image} />
            <li>{description}</li>
            <li>${price}</li>
          </div>
          :this.props.history.push("/")
            }
        </div>
    )
}
}






