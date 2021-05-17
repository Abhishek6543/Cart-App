import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9CSgHdAVPNskl6-7pUy8K23OmnNf5U4o",
  authDomain: "cart-d2f33.firebaseapp.com",
  projectId: "cart-d2f33",
  storageBucket: "cart-d2f33.appspot.com",
  messagingSenderId: "378580237594",
  appId: "1:378580237594:web:1146abd73fea564be300a3"
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
