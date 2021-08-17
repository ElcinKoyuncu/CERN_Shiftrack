import React from 'react';
import Calender from'../Calender/Calender';
import AdminDD from './AdminDD';
// import MakeSchedule from './MakeSchedule';

const AdminPage = () => {
    return (
        <div> 
            <AdminDD />
          
            
           <h2>Admin</h2> 
           <h2>Weekly Schedule</h2> 

           <div>
               <Calender />
           </div>
     
            
            </div>
    )

}

export default AdminPage