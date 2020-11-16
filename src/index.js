import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyBvqP63EZWbHuxayZIrWkMlIYRX5bQh518",
  authDomain: "extention-journal.firebaseapp.com",
  databaseURL: "https://extention-journal.firebaseio.com",
  projectId: "extention-journal",
  storageBucket: "extention-journal.appspot.com",
  messagingSenderId: "1025776991723",
  appId: "1:1025776991723:web:c28fe332889f3b5ef5adae",
  measurementId: "G-9EMJL8NNSQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
