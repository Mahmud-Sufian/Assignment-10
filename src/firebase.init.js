// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBFqQ9zbSn-pTCmf8pt9StmlkcK4dScug",
  authDomain: "assignment-10-91737.firebaseapp.com",
  projectId: "assignment-10-91737",
  storageBucket: "assignment-10-91737.appspot.com",
  messagingSenderId: "833819730648",
  appId: "1:833819730648:web:79d0fb8fd2ac540885adad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;