import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup'


const EmployeeWelcome = ()=> {
    var showdate= new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getDate()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    return(
        <div>
            <center>
            <h1>Welcome</h1>
            <h2>{dt}</h2>
            <h2>Location</h2>
            </center>
        
        </div>
    );
}

export default EmployeeWelcome;

