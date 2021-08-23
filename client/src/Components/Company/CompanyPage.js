import React, {useState} from 'react';
import ReactFlow from 'react-flow-renderer';
import "./admin.css";
import Schedule from '../Schedule/Schedule';
import MyCalendar from'../Calendar/MyCalendar';



const AdminPage = () => {
    const [events, setEvents] = useState([{id:1,
        title: 'elcinshift',
        start: new Date('August 23, 2021 03:24:00'),
        end: new Date('August 24, 2021 03:24:00'),
        allDay: false,
        },
        {id:2,
          title: 'xshift',
          start: new Date('August 27, 2021 03:24:00'),
          end: new Date('August 28, 2021 03:24:00'),
          allDay: false,
          }])

    // const elements = [
    //     { id: '1', type: 'input', data: { label: 'Manager Steve' }, position: { x: 150, y: 5 } },
    //     // you can also pass a React Node as a label
    //     { id: '2', data: { label: <div>Employee: Sarah</div> }, position: { x: 20, y: 100 } },
    //     { id: '3', data: { label: <div>Employee: James</div> }, position: { x: 150, y: 150 } },
    //     { id: 'e1-2', source: '1', target: '2', animated: true },
    //     { id: 'e1-2', source: '1', target: '3', animated: true },
    //   ];

    return (
        <div> 
            
           <h2 class="text-center text-decoration-underline">C E R N</h2>
           <Schedule onScheduleRequested={event => setEvents([...events,event])}/>
            
           {/* <div>
               <h3>Staff Flow Chart</h3>
               <div style={{ height: 250, width: 400}} class="border border-primary border:4px">
               <ReactFlow elements={elements} />
               </div> */}
               <div>
               <MyCalendar events={events} />
           </div>
           </div>
     
        // </div>
    )

}

export default AdminPage;