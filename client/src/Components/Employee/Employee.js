import React, {useState} from 'react';
import MyCalendar from'../Calendar/MyCalendar';
import RTO from './RTO';
import Clock from '../Clock/clock';
import "./employee.css";

import EmployeeWelcome from './EmployeeWelcome'


const Employee = () => {
    const [events, setEvents] = useState([])
    return (
        <div> 
            <EmployeeWelcome />
            <br></br>
           <Clock />
           <br></br>
           <br></br>
           <RTO onRTORequested={event => setEvents([...events,event])}/>
           

           <div>
               <MyCalendar events={events} />
           </div>
     
            
        </div>
    )

}

export default Employee;
