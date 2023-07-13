
import './App.css';
import { DateHolidays } from './components/DateHolidays';
import { CustomCalendar } from './components/ReactCalendar';

export default function App() {
  return (
    <div style={{ display: 'grid' }}>
      <h1>react-calendar</h1>
      <CustomCalendar />

      <br />
      <br />

      <h1>date-holidays</h1>
      <DateHolidays />
    </div>
  );
}


