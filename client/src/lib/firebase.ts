// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJLoeDBBSZ8_gNtTpyXkaJFkgg1f59hgo",
  authDomain: "headphone-ecom.firebaseapp.com",
  projectId: "headphone-ecom",
  storageBucket: "headphone-ecom.appspot.com",
  messagingSenderId: "564780027897",
  appId: "1:564780027897:web:dcb29eec8979b30aa43728"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
