import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
// The mutation types have been auto generated by running the codegen:generate script
// npm run gen:types when you need to generate types for a new types
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";

import "./Login.css";

// Create a the mutation that will add the email and password to the database
const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

class Login extends Component {
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

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
        {mutate => (
          <div className="loginContainer">
            <div className="loginWrapper">
              <div className="imgOverlay" />
              <form className="form" onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="input"
                  placeholder="Email Address..."
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="input"
                  placeholder="Password..."
                  onChange={this.handleChange}
                />
                <div className="buttonContainer">
                  <button
                    onClick={async () => {
                      const response = await mutate({
                        variables: { email, password }
                      });
                      console.log("response", response);
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Login;
