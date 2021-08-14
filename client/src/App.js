import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import Calender from'./Components/Calender/Calender';


const App = () => {

  return (
    <Router>
          <div className="App">
        <NavMenu />
  
        <Switch>     
          {/* <Route path="/" component={} />
          <Route path="/" component={} /> */}
          <Route path="/calender" component={Calender} />
          <Route path="/" exact component={Login} />
          <Redirect to="/"/>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
    );

}

export default App;