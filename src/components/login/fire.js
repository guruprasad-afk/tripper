import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAhhsmbg96XstHfAPzAOxK3C9XjeXGwe_Y",
  authDomain: "login-46b8f.firebaseapp.com",
  databaseURL: "https://login-46b8f.firebaseio.com",
  projectId: "login-46b8f",
  storageBucket: "login-46b8f.appspot.com",
  messagingSenderId: "620562800269",
  appId: "1:620562800269:web:6087ba0f221ee31af8ccc4",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
