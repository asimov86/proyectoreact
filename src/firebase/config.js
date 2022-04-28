// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKs9kzdLLXoXmMs1troVMoovA8NKsTPY4",
  authDomain: "proyectoreact-1da30.firebaseapp.com",
  projectId: "proyectoreact-1da30",
  storageBucket: "proyectoreact-1da30.appspot.com",
  messagingSenderId: "22056256728",
  appId: "1:22056256728:web:d8733e2524446c4dde03ad"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}