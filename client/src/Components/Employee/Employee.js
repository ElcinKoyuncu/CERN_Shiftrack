import React, {useState} from 'react';
import MyCalendar from'../Calendar/MyCalendar';
// import DropdownMenu from './DropdownMenu';
import RTO from './RTO';
import Clock from '../Clock/clock';

import EmployeeWelcome from './EmployeeWelcome'


const Employee = () => {
    const [events, setEvents] = useState([])
    return (
        <div> 
            <EmployeeWelcome />
           <h2>Employee</h2> 
           <RTO onRTORequested={event => setEvents([...events,event])}/>
           <h2>Clock in/Clock out</h2> 
           <Clock />

           <div>
               <MyCalendar events={events} />
           </div>
     
            
            </div>
    )

}

export default Employee
