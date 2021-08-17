import React from 'react';
import Calender from'../Calender/Calender';
import DropdownMenu from './DropdownMenu';
import RTO from './RTO';

const Employee = () => {
    return (
        <div> 
            <DropdownMenu />
           <h2>Employee</h2> 
           <RTO />
           <h2>Weekly Schedule</h2> 

           <div>
               <Calender />
           </div>
     
            
            </div>
    )

}

export default Employee