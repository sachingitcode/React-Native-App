// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL1_l-oQu_qJDqJDz5h_376BbajC1-_7A",
  authDomain: "rnapp1-73ecf.firebaseapp.com",
  projectId: "rnapp1-73ecf",
  storageBucket: "rnapp1-73ecf.firebasestorage.app",
  messagingSenderId: "564000435316",
  appId: "1:564000435316:web:6d983384d96587140e3521",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
