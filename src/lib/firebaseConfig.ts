// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmpYJi773qVwX0-6GPRCbojjcLXpj70LI",
    authDomain: "greeninsight-a14e1.firebaseapp.com",
    databaseURL: "https://greeninsight-a14e1-default-rtdb.firebaseio.com",
    projectId: "greeninsight-a14e1",
    storageBucket: "greeninsight-a14e1.appspot.com",
    messagingSenderId: "169443637121",
    appId: "1:169443637121:web:6be3e293b2b2bb6b27da80",
    measurementId: "G-ZNQ2H8K1XP"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Updated to Firestore
const analytics = getAnalytics(app);
