import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import ImageUpload from './api/image_uploader';
import AuthService from './api/auth_service';
import { firebaseApp } from './api/firebase';

import App from './App';
import ImageFileInput from './components/Editor/ImageFileInput';

import './index.css';

/**
 * firebaseApp 0개 인수 error
 */

const authService = new AuthService(firebaseApp);

const ImageUploader = new ImageUpload();
const FileInput = (props: any) => (
  <ImageFileInput {...props} ImageUpload={ImageUploader} />
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App authService={authService} FileInput={FileInput} />
    </React.StrictMode>
  </BrowserRouter>,
);
