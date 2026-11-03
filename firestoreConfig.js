import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // Your web app's Firebase configuration
    apiKey: "AIzaSyCxR9RH6tWBNmIxNi7u5VoXTlRoDpBr7SM",
  authDomain: "madweek8-ce993.firebaseapp.com",
  projectId: "madweek8-ce993",
  storageBucket: "madweek8-ce993.firebasestorage.app",
  messagingSenderId: "796636862004",
  appId: "1:796636862004:web:df1054812733a90400dc61",
  measurementId: "G-GQZ058EBBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);