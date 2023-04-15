// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {connectAuthEmulator, getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1pMfHqRL5r5nES2u9ryY31C5aw-5mrhg",
  authDomain: "employee-queue.firebaseapp.com",
  projectId: "employee-queue",
  storageBucket: "employee-queue.appspot.com",
  messagingSenderId: "935849885770",
  appId: "1:935849885770:web:fb08d6f5bd6bebf26ba6b3",
  measurementId: "G-JD99XNGHV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app

const auth = getAuth()
connectAuthEmulator(auth, "http://localhost:9099")
