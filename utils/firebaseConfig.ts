// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb6aDqtfX6lzYJIq8n4IalflCKzbnlNGM",
  authDomain: "cryptograd-ai.firebaseapp.com",
  projectId: "cryptograd-ai",
  storageBucket: "cryptograd-ai.appspot.com",
  messagingSenderId: "809051458242",
  appId: "1:809051458242:web:303247929f3cec83f1895b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)