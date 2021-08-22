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
            <br></br>
          
           <RTO onRTORequested={event => setEvents([...events,event])}/>
           
           <Clock />
           <br></br>
           <br></br>

           <div>
               <MyCalendar events={events} />
           </div>
     
            
        </div>
    )

}

export default Employee
