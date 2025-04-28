// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';   //추가한다
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPbOMnxG7bkqT24CvoCnSkEVVcYSLGAeE",
  authDomain: "react-vite-project-80204.firebaseapp.com",
  projectId: "react-vite-project-80204",
  storageBucket: "react-vite-project-80204.firebasestorage.app",
  messagingSenderId: "154809268760",
  appId: "1:154809268760:web:eb9929d466545a3fe6616d",
  measurementId: "G-CBSM1QCFYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);   //추가한다