import React from 'react';
import Calender from'../Calender/Calender';
import DropdownMenu from './DropdownMenu';

const Employee = () => {
    return (
        <div> 
            <DropdownMenu />
           <h2>Employee</h2> 
           <h2>Weekly Schedule</h2> 

           <div>
               <Calender />
           </div>
     
            
            </div>
    )

}

export default Employee