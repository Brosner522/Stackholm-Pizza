import React, { Component } from "react";

export default class Login extends Component {
  state = {
    userName: "",
  };

  handleLogin = (e) => {
    e.preventDefault();

    const filteredArray = this.props.customers.filter((customer) => {
      return customer.name.toLowerCase() == e.target[0].value;
    });

    if (filteredArray.length > 0) {
      this.props.loginUser(filteredArray);
      this.props.history.push("/");
      alert("Your order has been placed");
    } else {
      alert("Invalid user");
    }
  };

  handleSignUp = (e) => {
    const newUser = {
      name: this.state.userName,
    };
    fetch("http://localhost:9292/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then((res) => {
        if(res.status === 200) {
            res.json()
        }else if (res.status === 400) {
            alert("Existing user")
        }
        })
  };

  render() {
    return (
      <div>
        {
          <form onSubmit={(e) => this.handleLogin(e)}>
            <input
              type="text"
              name="username"
              value={this.state.userName}
              placeholder="Enter your username"
              onChange={(e) =>
                this.setState({ userName: e.target.value.toLowerCase() })
              }
            />
            <br />
            <button>Log in</button>
          </form>
        }
        <button onClick={this.handleSignUp}> Sign up </button>
      </div>
    );
  }
}
