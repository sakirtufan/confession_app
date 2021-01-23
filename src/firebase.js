import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC4JeZShLuNMhGejOtZt1yxU-Et_qabSa8",
    authDomain: "itirafci-447b2.firebaseapp.com",
    databaseURL: "https://itirafci-447b2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "itirafci-447b2",
    storageBucket: "itirafci-447b2.appspot.com",
    messagingSenderId: "970457219686",
    appId: "1:970457219686:web:3bcaa59def65d78cd223a7",
    measurementId: "G-WBHW17HV1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;