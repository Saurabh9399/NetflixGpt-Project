// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM3kFEKhTj99IahvJSsSDwPpaqvWBBC_E",
  authDomain: "netflixgpt-6a537.firebaseapp.com",
  projectId: "netflixgpt-6a537",
  storageBucket: "netflixgpt-6a537.appspot.com",
  messagingSenderId: "88236560079",
  appId: "1:88236560079:web:fb21adb917f068d106f1ba",
  measurementId: "G-JG32SH7F8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
