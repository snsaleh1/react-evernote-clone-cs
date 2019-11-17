import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAjDTdLrCDIeQi-ATD-kEWRwjBT9pUgOY",
    authDomain: "react-evernote-clone-cs.firebaseapp.com",
    databaseURL: "https://react-evernote-clone-cs.firebaseio.com",
    projectId: "react-evernote-clone-cs",
    storageBucket: "react-evernote-clone-cs.appspot.com",
    messagingSenderId: "255831953042",
    appId: "1:255831953042:web:d4fbbc7b4cb652d039604b",
    measurementId: "G-BG703Q6QZ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
