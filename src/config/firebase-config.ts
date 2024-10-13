// firebaseConfig.js

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0bp6LfuXFjphBDyb76O33i0LeEG_tmIM",
  authDomain: "iteam-fa5d6.firebaseapp.com",
  projectId: "iteam-fa5d6",
  storageBucket: "iteam-fa5d6.appspot.com",
  messagingSenderId: "385603539929",
  appId: "1:385603539929:web:fc61dc1851d1a01fa4ffc8",
  measurementId: "G-Q5TKVZ7Q9H",
};

// Initialize Firebase
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

const firebaseAuth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);

export {firebaseAuth,firestore}
