// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtygt86ghX17OwR1mYJEONAALEZWAK-LU',
  authDomain: 'cc-expenses-14352.firebaseapp.com',
  projectId: 'cc-expenses-14352',
  storageBucket: 'cc-expenses-14352.firebasestorage.app',
  messagingSenderId: '674087794203',
  appId: '1:674087794203:web:e3de6e49c3844e13806abe',
  measurementId: 'G-LK52HPVMEJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
