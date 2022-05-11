import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Profiles from './components/Profiles';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
