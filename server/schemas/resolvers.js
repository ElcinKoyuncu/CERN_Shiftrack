/**
 * import requirements for resolvers to use
 */
const {User, Admin} = require('../models');
const { signToken } = require('../utils/auth');


//! input resolver functions: queries, mutations
const resolvers = {

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
      const admin = await Admin.findOne({email});

      if (!user || !admin) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      const correctAdminPw = await admin.isCorrectPassword(password);

      if (!correctPw || !correctAdminPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      const adminToken = signToken(admin);
      return { token, user, adminToken, admin };
    },

  },

}; //end of resolvers 

//exporting resolvers
module.exports = resolvers;
