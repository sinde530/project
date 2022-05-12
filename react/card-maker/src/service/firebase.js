import firebase from 'firebase';
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_Key,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: 'business-card-maker-3916a.appspot.com',
  //   messagingSenderId: '474309354507',
  //   appId: '1:474309354507:web:4dd2007f2cd664fbf3130e',
  //   measurementId: 'G-VMV8Z036HD',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
