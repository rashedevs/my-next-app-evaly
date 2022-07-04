// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCTPWk5pqXoWU1lh5wSdKH8belBdtv678",
  authDomain: "evaly-5a881.firebaseapp.com",
  projectId: "evaly-5a881",
  storageBucket: "evaly-5a881.appspot.com",
  messagingSenderId: "1063320165851",
  appId: "1:1063320165851:web:cdb6cfe3234a45ba7a5bfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
