import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "./calendar.css";


const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div class="calendar">
    <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar