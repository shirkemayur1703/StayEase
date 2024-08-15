// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stayease-1778d.firebaseapp.com",
  projectId: "stayease-1778d",
  storageBucket: "stayease-1778d.appspot.com",
  messagingSenderId: "539231507501",
  appId: "1:539231507501:web:5299d23437067b31b014a4",
  measurementId: "G-1GRV5G19WX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
