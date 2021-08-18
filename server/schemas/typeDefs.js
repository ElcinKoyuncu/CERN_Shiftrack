const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(userName: String!, password: String!): Auth
  
}

type User {
    _id: ID!
    userName: String!
    password: String
    clockIn: String
    clockOut: String
  }
  
type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }


`;

module.exports = typeDefs;