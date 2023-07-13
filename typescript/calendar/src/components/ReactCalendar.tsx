import { useState } from 'react';
import Calendar from 'react-calendar';

type ValueType = Date | Date[] | null;

export const CustomCalendar = () => {
  const [selectedData, setSelectedData] = useState<ValueType>(null);

  const handleDateChange = (date: ValueType) => {
    if (Array.isArray(date)) {
      //
    } else {
      setSelectedData(date);
    }
  };

  return (
    <>
      <Calendar onChange={handleDateChange} value={selectedData} />
    </>
  );
};
