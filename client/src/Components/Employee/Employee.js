import React from 'react';
import Calendar from'../Calendar/Calendar';
// import DropdownMenu from './DropdownMenu';
import RTO from './RTO';
import Clock from '../Clock/clock';

import EmployeeWelcome from './EmployeeWelcome'


const Employee = () => {
    return (
        <div> 
            <EmployeeWelcome />
           <h2>Employee</h2> 
           <RTO />
           <h2>Clock in/Clock out</h2> 
           <Clock />

           <div>
               <Calendar />
           </div>
     
            
            </div>
    )

}

export default Employee
