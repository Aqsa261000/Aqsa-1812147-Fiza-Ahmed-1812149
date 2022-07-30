// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtJuygA6WbcH5DItPYeXxip6rGHczt470",
  authDomain: "health-first-app.firebaseapp.com",
  databaseURL: "https://health-first-app-default-rtdb.firebaseio.com",
  projectId: "health-first-app",
  storageBucket: "health-first-app.appspot.com",
  messagingSenderId: "483760232492",
  appId: "1:483760232492:web:3542970af43a85139a5989",
  measurementId: "G-6DJJ6NC4K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
