import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCLuK0EHq8tyx0hk6DadDbGilkH9IdlNz8",
  authDomain: "vdes-c928f.firebaseapp.com",
  databaseURL: "https://vdes-c928f.firebaseio.com",
  projectId: "vdes-c928f",
  storageBucket: "vdes-c928f.appspot.com",
  messagingSenderId: "559217194912",
  appId: "1:559217194912:web:6001c6e1869d29f65d96c5",
  measurementId: "G-F0KCVNWRT8",
};
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
