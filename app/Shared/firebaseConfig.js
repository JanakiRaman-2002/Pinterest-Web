// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW3jZS5mr__stwgrOuPWdDy8_sUUbjYB8",
  authDomain: "pinterest-clone-e43d9.firebaseapp.com",
  projectId: "pinterest-clone-e43d9",
  storageBucket: "pinterest-clone-e43d9.appspot.com",
  messagingSenderId: "485909034202",
  appId: "1:485909034202:web:1f6270b226746b17f6e1e3",
  measurementId: "G-6E2RLTC51V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app