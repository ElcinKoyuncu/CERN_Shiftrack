import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
       email
      }
    }
  }
`;
export const LOGIN_ADMIN = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
    adminToken
      admin {
        _id
       email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_USER = gql`
  mutation saveUser($userData: UserInput!) {
    saveUser(userData: $userData) {
      _id
      username
      email
      savedUsers {
        userId
        firstName
        lastName
        email
        username
        password
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      username
      email
      savedUsers {
        userId
        firstName
        lastName
        email
        username
        password
      }
    }
  }
`;
