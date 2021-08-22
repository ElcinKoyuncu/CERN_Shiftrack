/**
 * import requirements for resolvers to use
 */
 
const {User, Admin} = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express')

//! input resolver functions: queries, mutations
const resolvers = {

  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
  },
    admin: 
      async (parent, args, context) => {
        if (context.admin) {
          const adminData = await Admin.findOne({ _id: context.admin._id }).select('-__v -password');
  
          return adminData;
        }
  
        throw new AuthenticationError('Not logged in');

    },

  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw new AuthenticationError('User not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      

      if (!user) {
        throw new AuthenticationError('Incorrect credentials 1');
      }

      const correctPw = await user.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials 2');
      }

      const token = signToken({...user, type:"user"});
      
      return { token, user };

    },
    adminLogin: async (parent, { email, password }) => {
      const admin = await Admin.findOne({email});

      if (!admin) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await admin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const adminToken = signToken({...admin, type:"admin"});
      return {adminToken, admin };
      
    },

  },

}; //end of resolvers 

//exporting resolvers
module.exports = resolvers;
