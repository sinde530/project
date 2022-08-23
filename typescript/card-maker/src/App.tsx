import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Maker from './components/Maker';

interface Props {
  authService: any;
}

function App({ authService }: Props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker />} />
      </Routes>
    </div>
  );
}

export default App;
