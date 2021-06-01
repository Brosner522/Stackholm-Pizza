import React, { Component } from "react";
export default class PizzaDetail extends Component { 

render() {
    const {name, image, description, price, topping_id } = this.props.pizza
    console.log(this.props.pizza)
    return(
        <div>
            <li>{name}</li>
            <img src={image} />
            <li>{description}</li>
            <li>{price}</li>
        </div>
    )
}
}
