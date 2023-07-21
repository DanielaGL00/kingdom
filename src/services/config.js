import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kingdom-30d5d.firebaseapp.com",
  projectId: "kingdom-30d5d",
  storageBucket: "kingdom-30d5d.appspot.com",
  messagingSenderId: "754860827275",
  appId: "1:754860827275:web:0d0b5d866b7990d7d5aa8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);