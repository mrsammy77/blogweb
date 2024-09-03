import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {  onAuthStateChanged,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore , addDoc, collection } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCaASRJAZjlR3rSzmeVxgoNhbeijyOackw",
  authDomain: "heckthon.firebaseapp.com",
  projectId: "heckthon",
  storageBucket: "heckthon.appspot.com",
  messagingSenderId: "634691628572",
  appId: "1:634691628572:web:d600641a2ee6422624f9d9",
  measurementId: "G-39JK45DGYL"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);




export{addDoc, collection,db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut }