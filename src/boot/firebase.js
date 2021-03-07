import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABzst8sVhajnOtrsvu9q4Z_OV02B7DzFQ",
  authDomain: "qweeter-68e1a.firebaseapp.com",
  projectId: "qweeter-68e1a",
  storageBucket: "qweeter-68e1a.appspot.com",
  messagingSenderId: "430710059483",
  appId: "1:430710059483:web:c165c5552e59a02dc1b7fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();

export default database
