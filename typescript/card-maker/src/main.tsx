import React from 'react';
import ReactDOM from 'react-dom/client';

import AuthService from './api/auth_service';
import { firebaseApp } from './api/firebase';

import App from './App';

import './index.css';

/**
 * firebaseApp 0개 인수 error
 */
const authService = new AuthService(firebaseApp);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
);
