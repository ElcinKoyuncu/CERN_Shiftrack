<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
=======
/**
 * import requirements for resolvers to use
 */
const {User, Admin} = require('../models');
>>>>>>> e32b2ae52fde48e56de0d99b10ae559ad001838b

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

<<<<<<< HEAD
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
=======
  Query: {
    user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id);

      return user;
    }

    throw new AuthenticationError('User not logged in');
  },
  admin: async (parent, args, context) => {
    if (context.admin) {
      const user = await Admin.findById(context.user._id);

      return admin;
    }

    throw new AuthenticationError('Not logged in');

  },

  },
  Mutation: {
    
  }
}; //end of resolvers 
>>>>>>> e32b2ae52fde48e56de0d99b10ae559ad001838b

module.exports = resolvers;