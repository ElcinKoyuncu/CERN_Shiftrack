import React, {useState} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import MyCalendar from'./Components/Calendar/MyCalendar';
import CompanyPage from './Components/Company/CompanyPage';
import Employee from './Components/Employee/Employee';
import AdminLogin from './Components/Auth/AdminLogin';
// import AdminSignup from './Components/Auth/AdminSignup';

const client = new ApolloClient({
  
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    const adminToken = localStorage.getItem('id_adminToken');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        authorization: adminToken ? `Bearer ${adminToken}` : '',
      },
    });
  },
  uri: '/graphql',
});

function Routes() {
  const isAuthenticated= localStorage.getItem("id_token")!== null;
 
  if (isAuthenticated)
  {
    return <Switch>
     <Route path="/employee" exact component={Employee} />   
            <Route path="/companypage" exact component={CompanyPage} />
            <Route path="/calendar" exact component={MyCalendar} />
            <Redirect to="/employee"/>
            </Switch>
  } 
  else {
    return <Switch>
 <Route path="/" exact component={Login} />
 <Route path="/admin" exact component={AdminLogin} />
 {/* <Route path="/signup" exact component={AdminSignup} /> */}
 
<Redirect to="/"/>
    </Switch>
  }
}


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
      
          <div className="App">
          <NavMenu />
  
         
           <Routes />
         
          {/* <Footer /> */}
        </div>
        
      </Router>
    </ApolloProvider>
  );

}

export default App;