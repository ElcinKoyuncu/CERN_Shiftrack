import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const events = [{id:1,
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
    }]

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