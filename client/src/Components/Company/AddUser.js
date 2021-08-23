import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeUserId } from '../utils/localStorage';

const SavedUsers = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeUser, { error }] = useMutation(REMOVE_USER);

  const userData = data?.me || {};

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;


  // create function that accepts the user's mongo _id value as param and deletes the user from the database
  const handleDeleteUser = async (userId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeUser({
        variables: { userId },
      });

      // upon success, remove user's id from localStorage
      removeUserId(userId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing {userData.username}'s saved users!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
        {userData.savedUsers?.length
            ? `Viewing ${userData.savedUsers.length} saved ${
                userData.savedUsers.length === 1 ? 'user' : 'users'
              }:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedUsers?.map((user) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className='btn-block btn-danger'
                    onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;