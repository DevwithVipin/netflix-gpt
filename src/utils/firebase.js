// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Z0hYtPNko2MDkrMU_7L9P0em9Eq7tmw",
  authDomain: "netflix-gpt-10078.firebaseapp.com",
  projectId: "netflix-gpt-10078",
  storageBucket: "netflix-gpt-10078.appspot.com",
  messagingSenderId: "415508766049",
  appId: "1:415508766049:web:966b947a1c6f47e9fa3920",
  measurementId: "G-P6ZP4SXBXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();