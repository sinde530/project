import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from 'src/components/Login';
import Maker from 'src/components/Maker';
import { useEffect } from 'react';

interface Props {
  authService: any;
  FileInput: any;
}

function App({ authService, FileInput }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage) {
      localStorage.getItem('Key');
      navigate('/maker');
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/maker"
          element={<Maker authService={authService} FileInput={FileInput} />}
        />
      </Routes>
    </div>
  );
}

export default App;
