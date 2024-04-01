// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDNwU6QbC4o7y1hGn0Y-klsKbBeOty4Y4",
  authDomain: "netflixgpt-a261a.firebaseapp.com",
  projectId: "netflixgpt-a261a",
  storageBucket: "netflixgpt-a261a.appspot.com",
  messagingSenderId: "433222985864",
  appId: "1:433222985864:web:8567532e9ecf09a9b6573d",
  measurementId: "G-FQ8PJCYWGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();