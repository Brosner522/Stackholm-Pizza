import React, { Component } from "react";
export default class PizzaDetail extends Component { 

    handleHome = () => {
        this.props.history.push("/")
        
    }

    render() {
    const {name, image, description, price, topping_id } = this.props.pizza
    return(
        <div>  
             { 
            Object.keys(this.props.pizza).length !== 0 
            ? <div>
            <button onClick={this.handleHome}>home </button>
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



