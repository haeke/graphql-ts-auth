import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as session from "express-session";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
// import { User } from "./entity/User";

// createConnection()
//   .then(async connection => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");
//   })
//   .catch(error => console.log(error));

const startServer = async () => {
  const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
    // with the session created we have access to cookies
    context: ({ req }) => ({ req })
  });
  // create the database connection so that we can use the resolvers functions.
  await createConnection();

  const app = express();

  app.use(
    session({
      secret: "12398chsduio#DSFSEiojhewh9083",
      resave: false, //resaves the session even if it doesnt change
      saveUninitialized: false // assign a session when data has been added
    })
  );

  server.applyMiddleware({ app }); // app is from an existing express app

  app.listen({ port: 4000 }, () =>
    console.log(`server ready http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
