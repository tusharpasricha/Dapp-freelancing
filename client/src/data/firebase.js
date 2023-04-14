// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbuCm00vD87CpfXobhyEintjfCndSh0ZE",
  authDomain: "trustlancer-b3772.firebaseapp.com",
  projectId: "trustlancer-b3772",
  storageBucket: "trustlancer-b3772.appspot.com",
  messagingSenderId: "790850111723",
  appId: "1:790850111723:web:e33f10b9bd6b39641696ae"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

export default app;