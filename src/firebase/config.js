// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCNN71e2n8jHdjSg8Gth3UVzZwss2R0_Xc",
  authDomain: "login-react-45404.firebaseapp.com",
  projectId: "login-react-45404",
  storageBucket: "gs://login-react-45404",
  messagingSenderId: "3512623651",
  appId: "1:35683178704:web:2cab2003319bbac2eba6d5"
};
/* // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNN71e2n8jHdjSg8Gth3UVzZwss2R0_Xc",
  authDomain: "login-react-45404.firebaseapp.com",
  projectId: "login-react-45404",
  storageBucket: "gs://login-react-45404",
  messagingSenderId: "3512623651",
  appId: "1:35683178704:web:2cab2003319bbac2eba6d5"
}; */

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );