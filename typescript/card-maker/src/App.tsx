import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from 'src/components/Login';
import Maker from 'src/components/Maker';

interface Props {
  authService: any;
}

function App({ authService }: Props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={<Maker authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
