// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFtqhuHklO1y-Cvb2kpLjcXcyZhkJdEis",
  authDomain: "auth-e416c.firebaseapp.com",
  projectId: "auth-e416c",
  storageBucket: "auth-e416c.firebasestorage.app",
  messagingSenderId: "384845506936",
  appId: "1:384845506936:web:4b0ea5cb7590248eb7c08d",
  measurementId: "G-4C9187P07M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);