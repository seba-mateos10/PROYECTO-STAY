// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqq_mxLEXpU58wC4Gi17g1pkPD4KTaF0A",
  authDomain: "tienda-stay.firebaseapp.com",
  projectId: "tienda-stay",
  storageBucket: "tienda-stay.appspot.com",
  messagingSenderId: "652201070521",
  appId: "1:652201070521:web:922376d4a5ecea0fa23068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
