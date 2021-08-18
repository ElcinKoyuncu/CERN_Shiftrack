import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
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