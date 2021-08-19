import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import Calender from'./Components/Calender/Calender';
import AdminPage from './Components/Admin/AdminPage';
import Employee from './Components/Employee/Employee';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Router>
            <div className="App">
          <NavMenu />
  
          <Switch>
            <Route path="/employee" component={Employee} />   
            <Route path="/admin" component={AdminPage} />
            <Route path="/calender" component={Calender} />
            <Route path="/" exact component={Login} />
            <Redirect to="/"/>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );

}

export default App;