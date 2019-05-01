import { gql } from "apollo-server-express";
// the schema definitions
export const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
