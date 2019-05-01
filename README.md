# GraphQL TS Auth with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## Technologies Used

1. TypeScript
2. TypeORM
   command used - `typeorm init --name server --database postgres` you can use more than just postgres
3. Node js
4. npm
5. Apollo-Server-Express
6. Express
7. Express-Session
8. bcryptjs

## Apollo Server Express - used to setup sessions for authentication

The middleware that uses the apollo-server-express package url: https://www.apollographql.com/docs/apollo-server/essentials/server.html#integrations

## Graphql

## Express

## Express-Session

## Bcrypt

# PSQL Steps

1. create database `create database authexample`
2. log into psql `psql -U postgres`
3. list all databases `\l`
4. delete database `drop database authexample;`
5. connect to database `psql authexample postgres`
6. create the users table `create table users ( id serial PRIMARY KEY, email VARCHAR (500), password VARCHAR(600) );`

# Apollo Server

## to run the server `npm run start`

7. Test the Mutation by running the server and then running the command
   `mutation { register(email:"email@gmail.com", password:"password") }`
8. Test the Mutation that will return a registered user
   `mutation { login(email:"email@123.com", password:"password") { id email } }`
   the id and email will be returned.
9. Verify Cookies are created - change apollo server settings `"request.credentials": "include"`
10. Inside the application tab under cookies on google chrome for example to verify the cookie has been created.
11. Test to confirm that you can verify the identity of the user by running the me query, it should provide the user if a cookie has been created for the logged in user.
    `query { me { id email } }`
12. The register, login and verify login session flow
    `mutation { register(email: "email2@gmail.com", password: "password") mutation { login (email: "email2@gamil.com", password: "password"){id email} query { me { id email } }` This will register a new user, log them in, and test to make sure that a cookie has been created for the new user.
