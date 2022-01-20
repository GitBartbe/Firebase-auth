import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";


const config = {
  apiKey: "AIzaSyCBBU4q2DrrGyfT8sOiksGQ4OK9hDlrMzw",
  authDomain: "authorisation-test-e0e3d.firebaseapp.com",
  projectId: "authorisation-test-e0e3d",
  storageBucket: "authorisation-test-e0e3d.appspot.com",
  messagingSenderId: "521157904264",
  appId: "1:521157904264:web:ce01100d716ecb55955c3d"
};


firebase.initializeApp(config);

export const auth = firebase.auth();