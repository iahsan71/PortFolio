// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5pfDOUa61Wtu6EVfzNCNjVDINP6P8QTY",
    authDomain: "portfolio-aahsan.firebaseapp.com",
    projectId: "portfolio-aahsan",
    storageBucket: "portfolio-aahsan.firebasestorage.app",
    messagingSenderId: "332477768285",
    appId: "1:332477768285:web:3de67c1761162dda65a3b4",
    measurementId: "G-Q8QRTDQF9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
