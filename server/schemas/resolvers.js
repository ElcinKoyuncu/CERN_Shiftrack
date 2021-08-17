/**
 * import requirements for resolvers to use
 */
 const { AuthenticationError } = require('apollo-server-express');
 const { Admin, Time, User  } = require('../models');
 const { signToken } = require('../utils/auth');

//! input resolver functions: queries, mutations
const resolvers = {
    Query: {
        getUser: async (parent, args, context) => {
          console.log("User Information",context.user);
          return await User.findById(context.user._id);
        }


}; //end of resolvers 

//exporting resolvers
module.exports = resolvers;