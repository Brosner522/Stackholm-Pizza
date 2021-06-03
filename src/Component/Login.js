import React, { Component } from "react";

export default class Login extends Component {
  state = {
    userName: "",
  };

  handleLogin = (e) => {
    e.preventDefault();

    const filteredArray = this.props.customers.filter((customer) => {
      return customer.name.toLowerCase() === e.target[0].value;
    });

    if (filteredArray.length > 0) {
      this.props.loginUser(filteredArray);
      this.props.history.push("/");
      alert(`Welcome back! ${this.state.userName} `);
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
      <body className="text-center">
      <main className="form-signin">
        {
          <form onSubmit={(e) => this.handleLogin(e)} >
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
            <div className="form-floating">
            <input 
            type="text" 
            className="form-control" 
            value={this.state.userName} 
            id="floatingInput" placeholder="User Name" 
            onChange={(e) =>
            this.setState({ userName: e.target.value.toLowerCase() })}
            />
            <label htmlFor="floatingInput"></label>
            </div>
            <button className="w-48 btn btn-lg btn-primary">Log in</button>
          </form>
        }
      </main>
        <button onClick={this.handleSignUp} className="w-45 btn btn-lg btn-primary"> Sign up </button>
        {/* <Button variant="primary" size="lg"> test </Button> */}
      </body>
    );
  }
}



{/* <input
              className="form-control" 
              id="floatingInput" 
              type="text"
              name="username"
              value={this.state.userName}
              placeholder="Enter your username"
              onChange={(e) =>
                this.setState({ userName: e.target.value.toLowerCase() })
              }
            /> */}
             {/* <label for="floatingInput">User Name</label> */}

