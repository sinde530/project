
import './App.css';
import { ChooseDateHolidays } from './components/ChooseDateHolidays';
import { DateHolidays } from './components/DateHolidays';
import MobileCalendar from './components/MobileCalendar';
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

      <br />
      <br />

      <h1>Choose date-holidays</h1>
      <ChooseDateHolidays />

      <br />
      <br />
      <h1>Choose mobile react-calendar</h1>
      <MobileCalendar />
    </div>
  );
}


