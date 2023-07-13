import Holidays from 'date-holidays';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './DateHolidays.css';

const localizer = momentLocalizer(moment);

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
};

export const DateHolidays = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const addEvent = (event: CalendarEvent) => {
    setEvents((oldEvent) => [...oldEvent, event]);
  };

  useEffect(() => {
    const hd = new Holidays();
    hd.init('KR');
    const allHolidays = hd.getHolidays(new Date().getFullYear());
    const publicHolidays = allHolidays.filter(
      (holiday) => holiday.type === 'public'
    );

    const holidayEvents = publicHolidays.map((holiday) => ({
      title: holiday.name,
      start: new Date(holiday.date),
      end: new Date(holiday.date),
      allDay: true,
    }));

    setEvents((oldEvents) => [...oldEvents, ...holidayEvents]);
  }, []);

  return (
    <div className="custom-calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
