import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from "./router";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCUzCvuEVF2uOkVaRBGLC1zgHGOKFPOo6M",
  authDomain: "noosa-amsterdam-aa87b.firebaseapp.com",
  databaseURL: "https://noosa-amsterdam-aa87b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "noosa-amsterdam-aa87b",
  storageBucket: "noosa-amsterdam-aa87b.appspot.com",
  messagingSenderId: "376720524206",
  appId: "1:376720524206:web:fa7000a27d6f48147b3e3f",
  measurementId: "G-97RSKL3H1P"
};
firebase.initializeApp(firebaseConfig);


//console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <MainRouter />
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();