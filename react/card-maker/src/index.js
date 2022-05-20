import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';

import './index.module.css';

import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';
import ImageUpload from './service/image_uploader';
import ImageFileInput from './components/image_file_input/ImageFileInput';

const authService = new AuthService(firebaseApp);
const ImageUploader = new ImageUpload();
const FileInput = (props) => <ImageFileInput {...props} ImageUpload={ImageUploader} />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);

reportWebVitals();
