// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSundOEBPRrAmQ8xL3UxHDEqBSDCTiyf0",
  authDomain: "raiway81vophuocloi.firebaseapp.com",
  projectId: "raiway81vophuocloi",
  storageBucket: "raiway81vophuocloi.appspot.com",
  messagingSenderId: "890665058536",
  appId: "1:890665058536:web:5c295d703bf91202c3895d",
  measurementId: "G-5MD32WWPL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);