import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCO1eHlCfGmmXhQhQOjsepo59njRX-7WNU",
  authDomain: "fir-crud-9fde7.firebaseapp.com",
  databaseURL: "https://fir-crud-9fde7-default-rtdb.firebaseio.com",
  projectId: "fir-crud-9fde7",
  storageBucket: "fir-crud-9fde7.appspot.com",
  messagingSenderId: "819361618836",
  appId: "1:819361618836:web:69dacc052fe7ef4dc9cd81",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
