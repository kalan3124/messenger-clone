import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCupT3MGIgO6qqOG4VNPwEwB8F8LsGP_RE",
  authDomain: "facebook-messenger-clone-33fe9.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-33fe9.firebaseio.com",
  projectId: "facebook-messenger-clone-33fe9",
  storageBucket: "facebook-messenger-clone-33fe9.appspot.com",
  messagingSenderId: "697189168600",
  appId: "1:697189168600:web:b0ccf1eab4d39933e1aead",
  measurementId: "G-RTGJ7BE2EF"
});

const db = firebaseApp.firestore();

export default db;
