/**
 * import requirements for resolvers to use
 */
const {User, Admin} = require('../models');


//! input resolver functions: queries, mutations
const resolvers = {

    user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
  


}; //end of resolvers 

//exporting resolvers
module.exports = resolvers;