import gql from 'graphql-tag';

export const QUERY_USER = gql`
  {
    user {
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
