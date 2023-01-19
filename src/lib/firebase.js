import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  doc,
  setDoc,
  where,
  limit,
  updateDoc,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBzWzZc5pm6TR7rcsnnCoY56oSJMmt99WY",
  authDomain: "erin-e104a.firebaseapp.com",
  projectId: "erin-e104a",
  storageBucket: "erin-e104a.appspot.com",
  messagingSenderId: "88572387504",
  appId: "1:88572387504:web:b772805f98b3ef19c15b75",
  measurementId: "G-B67NDFWG5B"
};

const firebase = initializeApp(config);

const db = getFirestore(firebase);

export { firebase, db,collection,setDoc,doc };
