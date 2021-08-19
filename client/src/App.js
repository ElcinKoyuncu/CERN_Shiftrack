import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import Calender from'./Components/Calender/Calender';
import AdminPage from './Components/Admin/AdminPage';
import Employee from './Components/Employee/Employee';




const App = () => {

  return (
    <Router>
          <div className="App">
        <NavMenu />
  
        <Switch>
        <Route path="/employee" component={Employee} />   
          <Route path="/admin" component={AdminPage} />
          <Route path="/calender" component={Calender} />
          <Route path="/Clock" component={Clock} />
          <Route path="/" exact component={Login} />
          <Redirect to="/"/>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    );

}

export default App;