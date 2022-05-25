import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

import styles from './app.module.css';

export default function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker FileInput={FileInput} authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
