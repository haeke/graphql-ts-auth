import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
// The mutation types have been auto generated by running the codegen:generate script
// npm run gen:types when you need to generate types for a new types
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
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
        )}
      </Mutation>
    );
  }
}

export default Login;
