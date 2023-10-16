import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {createContext} from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCrTFkV3eyNhdsnAfG_qDGZJrJKm9bDhpI",
  authDomain: "survey-729c4.firebaseapp.com",
  projectId: "survey-729c4",
  storageBucket: "survey-729c4.appspot.com",
  messagingSenderId: "174539202654",
  appId: "1:174539202654:web:f611ac84437af51a2854cf",
  measurementId: "G-6Y3LRYZB6P"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
