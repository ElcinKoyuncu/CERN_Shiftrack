import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import Calendar from'./Components/Calendar/Calendar';
import AdminPage from './Components/Admin/AdminPage';
import Employee from './Components/Employee/Employee';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function Routes() {
  const isAuthenticated= localStorage.getItem("id_token")!== null;
  if (
    isAuthenticated
  ){
    return <>
     <Route path="/employee" component={Employee} />   
            <Route path="/admin" component={AdminPage} />
            <Route path="/calendar" component={Calendar} />
            <Redirect to="/employee"/>
            </>
  }else {
    return <>
 <Route path="/" exact component={Login} />

<Redirect to="/"/>
    </>
  }
}


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
      <>
            <div className="App">
          <NavMenu />
  
          <Switch>
           <Routes />

          </Switch>
          {/* <Footer /> */}
        </div>
        </>
      </Router>
    </ApolloProvider>
  );

}

export default App;