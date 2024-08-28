// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfo74CLWA1SU3M2LFNjm0QRa0iRR9tZTE",
  authDomain: "vic-3176e.firebaseapp.com",
  projectId: "vic-3176e",
  storageBucket: "vic-3176e.appspot.com",
  messagingSenderId: "550958587905",
  appId: "1:550958587905:web:6f1216b35dc96ba347a000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;