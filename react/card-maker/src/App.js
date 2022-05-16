import React from 'react';

import Login from './components/login/Login';
import Maker from './components/maker/Maker';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './app.module.css';

export default function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}></Route>
          <Route path="/maker" element={<Maker authService={authService} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
