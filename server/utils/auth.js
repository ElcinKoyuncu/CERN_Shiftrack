const jwt = require('jsonwebtoken');

<<<<<<< HEAD
// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
=======
const secret = 'oursecretcernshhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
>>>>>>> e32b2ae52fde48e56de0d99b10ae559ad001838b
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

<<<<<<< HEAD
    // verify token and get user data out of it
=======
>>>>>>> e32b2ae52fde48e56de0d99b10ae559ad001838b
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
<<<<<<< HEAD
  signToken: function ({ username, password, _id }) {
    const payload = { username, password, _id };
=======
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
>>>>>>> e32b2ae52fde48e56de0d99b10ae559ad001838b

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
