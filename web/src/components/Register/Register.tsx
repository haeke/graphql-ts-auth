import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
// The mutation types have been auto generated by running the codegen:generate script
import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";

// Create a the mutation that will add the email and password to the database
const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

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

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
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
                  Register
                </button>
              </div>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;
