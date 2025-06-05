// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy4zMbRvaPLsVffabRxYx-_ajg2MlOnAc",
  authDomain: "lms-ah.firebaseapp.com",
  projectId: "lms-ah",
  storageBucket: "lms-ah.appspot.com",
  messagingSenderId: "920865714461",
  appId: "1:920865714461:web:38941b3e85fabcecb0f1f4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
