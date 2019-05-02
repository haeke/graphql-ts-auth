"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Query {
    hello: String!
  }
  type Mutation {
    register(email: String!, password: String!): Boolean!
  }
`;
//# sourceMappingURL=typeDefs.js.map