import React, { Component } from "react";

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
