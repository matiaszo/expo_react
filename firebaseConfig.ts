// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGwFdiOc6A6plkacfjFvpsALPCEQexWTE",
  authDomain: "expo-react-3516e.firebaseapp.com",
  projectId: "expo-react-3516e",
  storageBucket: "expo-react-3516e.appspot.com",
  messagingSenderId: "123019811763",
  appId: "1:123019811763:web:dc740bd3f3ac269031c9c6",
  measurementId: "G-225500QK5H"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);