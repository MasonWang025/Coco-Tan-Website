import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJ8uHzN_Jgtloyt4OkCtCf-sTIravM9Q8",
  authDomain: "coco-tan-website.firebaseapp.com",
  databaseURL: "https://coco-tan-website.firebaseio.com",
  projectId: "coco-tan-website",
  storageBucket: "coco-tan-website.appspot.com",
  messagingSenderId: "363665037551",
  appId: "1:363665037551:web:ff60b2c45073580f2de31a",
  measurementId: "G-DL8HQS0FM5",
});

const db = firebaseApp.firestore();

export { db };
