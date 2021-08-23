
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./calendar.css";


const localizer = momentLocalizer(moment)
const events = [{id:1,
  title: 'Test1',
  start: new Date('August 30, 2021 03:24:00'),
  end: new Date('August 30, 2021 03:24:00'),
  allDay: false,
  },
  // {id:2,
  //   title: 'test2',
  //   start: new Date('August 31, 2021 03:24:00'),
  //   end: new Date('August 31, 2021 03:24:00'),
  //   allDay: false,
  //   }
]

const MyCalendar = props => (
  <div>
  
     <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}/>
      
  </div>
)
export default MyCalendar;