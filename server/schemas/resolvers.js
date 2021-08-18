/**
 * import requirements for resolvers to use
 */
 const {User, Admin} = require('../models');


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
     
   }
 }; //end of resolvers 
 
 //exporting resolvers
 module.exports = resolvers;