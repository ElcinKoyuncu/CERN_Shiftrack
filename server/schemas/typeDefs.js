const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: String!
    username: String!
  ): Auth
  
  updateUser(
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
  ): Auth

  login(email: String!, password: String!): Auth
  adminLogin(email: String!, password: String!): Auth
  
}

type User {
    _id: ID
    username: String!
    password: String
    email: String
    role: String
   
  }

  type Admin {
    _id: ID
    username: String
    password: String
    email: String
    clockIn: String
    clockOut: String

  }
  type clockInOut {
    _id: ID
    clockIn: String
    clockOut: String
    userId: String
  }
  type Rto {
    _id: ID
    from: String
    to: String
  }
  
type Query {
    user: User
    admin: Admin
  }

type Auth {
    token: ID!
    user: User
}


`;

module.exports = typeDefs;