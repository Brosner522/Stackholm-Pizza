import React, { Component } from "react";
import Pizza from "./Pizza"
import Navbar from "./Navbar";

export default class HomePage extends Component {

render() {
    return(
        <div>
            <h2>Stackholm Pizza</h2>
            <Navbar />
            {this.props.pizzas.map(pizza => {
                return (
                <Pizza pizza={pizza} key={pizza.id} history={this.props.history} selectPizza={this.props.selectPizza}/>
            )
            })}
        </div>
    )
}
}




