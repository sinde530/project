import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from 'src/components/Login';
import Maker from 'src/components/Maker';

import './App.css';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#626262',
});

interface Props {
  authService: any;
  FileInput: any;
}

function App({ authService, FileInput }: Props) {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/maker"
          element={<Maker authService={authService} FileInput={FileInput} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
