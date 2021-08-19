const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  ): Auth
  
  updateUser(
    firstName: String
    lastName: String
    email: String
    password: String
  ): Auth

  login(email: String!, password: String!): Auth
  
}

type User {
    _id: ID
    username: String!
    password: String
    clockIn: String
    clockOut: String
    hoursWork: String
    role: String
    rto: String
  }

  type Admin {
    _id: ID
    username: String
    password: String
    email: String
    clockIn: String
    clockOut: String

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