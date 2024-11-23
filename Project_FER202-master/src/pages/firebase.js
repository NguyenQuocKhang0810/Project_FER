// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC3-nqKtskRkzY3Vf4uTtvqBvf6yEg2mKM',
    authDomain: 'login-19764.firebaseapp.com',
    projectId: 'login-19764',
    storageBucket: 'login-19764.firebasestorage.app',
    messagingSenderId: '634321948873',
    appId: '1:634321948873:web:0f8256296f822828007d18'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
