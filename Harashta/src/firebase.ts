import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGA5VE9j_kQ-jABG5l9C94WID4B7ONUiA",
    authDomain: "harashta-rafi-tour.firebaseapp.com",
    projectId: "harashta-rafi-tour",
    storageBucket: "harashta-rafi-tour.firebasestorage.app",
    messagingSenderId: "878067612017",
    appId: "1:878067612017:web:9fbba365ffc470ad7cded0",
    measurementId: "G-PY862SXY3F"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);