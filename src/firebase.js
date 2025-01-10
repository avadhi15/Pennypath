// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore , doc , setDoc} from "firebse/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCazFiXzCUl5lagGNOM63FxD3KXFqf2Y8",
  authDomain: "pennypath-6da2f.firebaseapp.com",
  projectId: "pennypath-6da2f",
  storageBucket: "pennypath-6da2f.firebasestorage.app",
  messagingSenderId: "1064168245722",
  appId: "1:1064168245722:web:bc46f03e5b78c34ca7d8e3",
  measurementId: "G-KJ86KHFF0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db , auth, provider , doc , setDoc};