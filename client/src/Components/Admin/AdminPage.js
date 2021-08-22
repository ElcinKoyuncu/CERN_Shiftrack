import React, {useState} from 'react';
import MyCalendar from'../Calendar/MyCalendar';
import Schedule from '../Schedule/Schedule';

const AdminPage = () => {
    const [events, setEvents] = useState([])
    return (
        <div> 

           <div>
               <Schedule />
               <MyCalendar events={events} />
           </div>
     
            
            </div>
    )

}

export default AdminPage