import React, { Component } from "react";
export default class Pizza extends Component { 

render() {
    const {name, image, description, price, topping_id } = this.props.pizza
    return(
        <div className= "pizza">
            <li className="pizza-name">{name}</li>
            <img className="pizza-pic" src={image} onClick={() => this.props.selectPizza(this.props.pizza, this.props)}/>
        </div>
    )
}
}


