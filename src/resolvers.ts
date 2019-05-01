import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcrypt";
import { User } from "./entity/User";

export const resolvers: IResolvers = {
  Query: {
    hello: () => "hello"
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
    }
  }
};
