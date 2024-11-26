// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_NEWS_PARK_APIKEY,
  authDomain: import.meta.env.VITE_NEWS_PARK_AUTHDOMAIN,
  projectId: import.meta.env.VITE_NEWS_PARK_PROJECTID,
  storageBucket: import.meta.env.VITE_NEWS_PARK_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_NEWS_PARK_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_NEWS_PARK_APPID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;