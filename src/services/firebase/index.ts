import firebase from "firebase/app";
import "firebase/firestore"

let firebaseConfig = {
  apiKey: "AIzaSyD1rBBSx56hbk-xjh2QhxlNQpM0bg1ZhuI",
  authDomain: "usersfirebase-df01c.firebaseapp.com",
  projectId: "usersfirebase-df01c",
  storageBucket: "usersfirebase-df01c.appspot.com",
  messagingSenderId: "1090008901577",
  appId: "1:1090008901577:web:a3096ea73cea4fd198ea18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
