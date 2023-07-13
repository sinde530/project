// import Holidays from "date-holidays";
import moment from "moment";
import { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const ChooseDateHolidays = () => {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment)

  useEffect(() => {
    //
  },[])

  const events = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
    {
      title: 'Event 2',
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date
    },
  ];
  
  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
}