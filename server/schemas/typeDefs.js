const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(username: String!, password: String!): Auth
  
}

type User {
    _id: ID!
    username: String!
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