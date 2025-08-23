// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUS_eIDiGgCk5xrcd5tsDNfQaPx79xXiI",
  authDomain: "swiggy-182b9.firebaseapp.com",
  projectId: "swiggy-182b9",
  storageBucket: "swiggy-182b9.firebasestorage.app",
  messagingSenderId: "244607223020",
  appId: "1:244607223020:web:55c40899a8816bebc7d1c9",
  measurementId: "G-TSKBRVY9SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 