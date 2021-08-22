import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import MyCalendar from'./Components/Calendar/MyCalendar';
import AdminPage from './Components/Admin/AdminPage';
import Employee from './Components/Employee/Employee';
import Schedule from './Components/Schedule/Schedule';

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
    return <Switch>
     <Route path="/employee" exact component={Employee} />   
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/calendar" exact component={MyCalendar} />
            <Redirect to="/employee"/>
            </Switch>
  }else {
    return <Switch>
 <Route path="/" exact component={Login} />

<Redirect to="/"/>
    </Switch>
  }
}


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
      <>
            <div className="App">
          <NavMenu />
  
         
           <Routes />
         
          {/* <Footer /> */}
        </div>
        </>
      </Router>
    </ApolloProvider>
  );

}

export default App;