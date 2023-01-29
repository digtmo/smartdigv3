// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbjXh_IKlosg9BN5n-_6nXG0jB7C6sffk",
  authDomain: "reactapp-b496e.firebaseapp.com",
  projectId: "reactapp-b496e",
  storageBucket: "reactapp-b496e.appspot.com",
  messagingSenderId: "1090557538567",
  appId: "1:1090557538567:web:a5ffa3e3cba5cdc6d7d5a2",
  measurementId: "G-4K09TKBWL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


