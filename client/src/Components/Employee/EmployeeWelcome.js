import React from 'react';
import jwt_decode from "jwt-decode";
import axios from '../../utils/holidayApi';
// import ListGroup from 'react-bootstrap/ListGroup'


const EmployeeWelcome = ()=> {
    const decoded = jwt_decode(localStorage.getItem("id_token"));

axios.get('/holidays?country=US&size=100&format=json&pretty=true&pretty=true&year=2021&key=8626679286f9a2a20ece9a7ba4c696ee477743')
     .then(response => {
      console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

    var showdate= new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getDate()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    return(
        <div>
            <center>
            <h1>Welcome, {decoded.data.username} </h1>
            <h2>{dt}</h2>
            <h2></h2>
            </center>
        
        </div>
    );
}

export default EmployeeWelcome;

