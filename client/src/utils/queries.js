import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
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
