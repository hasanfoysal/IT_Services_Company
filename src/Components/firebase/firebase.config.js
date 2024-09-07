// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzh8DqQScTTnYeocI56Fqn8_HApzXvQfI",
  authDomain: "dragon-news-auth-99ba1.firebaseapp.com",
  projectId: "dragon-news-auth-99ba1",
  storageBucket: "dragon-news-auth-99ba1.appspot.com",
  messagingSenderId: "343335412193",
  appId: "1:343335412193:web:9d05bc3dc6fe39e88032a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;