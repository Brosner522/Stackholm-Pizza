import React, { Component } from "react";

export default class Order extends Component {
    render() {
        return(
            Object.keys(this.props.pizza).length !== 0 
            ?<div>
                <li>{this.props.pizza.name}</li>
                <img src={this.props.pizza.image}/>
                <h2>Please select a topping you would like to add</h2>
                {this.props.topping.map(topping => {
                    return  <li>{topping.name}</li>
                })}
                </div>
            :this.props.history.push("/")

            
        )
    }
}
