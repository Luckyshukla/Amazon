// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2Xhmsh7bbI9wXxv5HO6e1j20Zdwi5MRE",
    authDomain: "orgodoor.firebaseapp.com",
    projectId: "orgodoor",
    storageBucket: "orgodoor.appspot.com",
    messagingSenderId: "653755020839",
    appId: "1:653755020839:web:aee9ac91744e35c14bc002",
    measurementId: "G-3XZZ3NTCD4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };