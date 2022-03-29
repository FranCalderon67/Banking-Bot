// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXdpoeuZ0HT_GhamH58Nw3duq_dLvqtr0",
  authDomain: "homebanking-a26c3.firebaseapp.com",
  projectId: "homebanking-a26c3",
  storageBucket: "homebanking-a26c3.appspot.com",
  messagingSenderId: "66743352028",
  appId: "1:66743352028:web:3e76a4dccf33ba185e9219",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
