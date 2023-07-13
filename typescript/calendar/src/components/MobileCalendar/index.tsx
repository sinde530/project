import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MobileCalendar.css';

const MobileCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [events, setEvents] = useState<string[]>([]);

  const handleDateChange = (date: Date | Date[]) => {
    setDate(date);
  };

  const handleEventAdd = () => {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      setEvents([...events, eventTitle]);
    }
  };

  return (
    <div className="mobile-calendar">
      <div className="mobile-calendar-header">
        <button className="mobile-calendar-add-btn" onClick={handleEventAdd}>
          Add Event
        </button>
      </div>
      <Calendar
        value={date}
        onChange={handleDateChange}
        className="mobile-calendar-body"
      />
      <div className="mobile-calendar-events">
        {events.map((event, index) => (
          <div key={index} className="mobile-calendar-event">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCalendar;
