import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';
import ImageUpload from './service/image_uploader';
import ImageFileInput from './components/image_file_input/ImageFileInput';

const authService = new AuthService(firebaseApp);
const ImageUploader = new ImageUpload();
const FileInput = (props) => <ImageFileInput {...props} ImageUploader={ImageUploader} />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
