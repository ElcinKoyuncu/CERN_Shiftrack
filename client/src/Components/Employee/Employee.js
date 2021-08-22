import React, {useState} from 'react';
import MyCalendar from'../Calendar/MyCalendar';
import RTO from './RTO';
import Clock from '../Clock/clock';
import Schedule from '../Schedule/Schedule';
import EmployeeWelcome from './EmployeeWelcome'


const Employee = () => {
    const [events, setEvents] = useState([])
    return (
        <div> 
            <EmployeeWelcome />
            <Schedule onScheduleRequested={event => setEvents([...events,event])}/>
           <RTO onRTORequested={event => setEvents([...events,event])}/>
           <h2>Clock in/Clock out</h2> 
           <Clock />
           <br>
           </br>

           <div>
               <MyCalendar events={events} />
           </div>
     
            
            </div>
    )

}

export default Employee
