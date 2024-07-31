// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSEUrCxl_U6Xsg5b3gpZJ7nJI39IQ0R-8",
  authDomain: "wilson-80aad.firebaseapp.com",
  projectId: "wilson-80aad",
  storageBucket: "wilson-80aad.appspot.com",
  messagingSenderId: "608523136616",
  appId: "1:608523136616:web:d92beceefd33b3278815dd",
  measurementId: "G-ZHN56EKJ8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);