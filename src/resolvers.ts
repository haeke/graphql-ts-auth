import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { User } from "./entity/User";

export const resolvers: IResolvers = {
  Query: {
    me: (_, __, { req }) => {
      // the me query should provide us with the current cookie
      console.log(req.session);
      return null;
    }
  },
  Mutation: {
    register: async (_, { email, password }) => {
      try {
        // This function will create a user with an email and hashed password.
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword }).save();
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    login: async (_, { email, password }, { req }) => {
      // responsible for returning a valid user
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(password, user.password);
      //if the password does not match
      if (!valid) {
        return null;
      }

      // add the users id to the req.session.userId express session will add the cookie for the user who is logged in.
      req.session.userId = user.id;
      console.log(req.session.userId); // confirm that we have access to session: cookie

      return user;
    }
  }
};
