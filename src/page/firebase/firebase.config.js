// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPF_2u1_Uj6-Wz3zEngBo-Wbv53sL4JJ8",
  authDomain: "alpha-academy-simple.firebaseapp.com",
  projectId: "alpha-academy-simple",
  storageBucket: "alpha-academy-simple.appspot.com",
  messagingSenderId: "224715842946",
  appId: "1:224715842946:web:4d2d5428ddc8192e3d9b9b",
  measurementId: "G-9H6J3406J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;