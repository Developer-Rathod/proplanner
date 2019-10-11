import firebase from 'firebase/app';
import 'firebase/firestore'; //databse
import 'firebase/auth'; // authentication

// Initalize firebase configuration from firebase project from google.
var firebaseConfig = {
    apiKey: "AIzaSyBQ5aej_-hy90qN9rGDDx-GG8IxPeb1yHo",
    authDomain: "proplanner-project.firebaseapp.com",
    databaseURL: "https://proplanner-project.firebaseio.com",
    projectId: "proplanner-project",
    storageBucket: "proplanner-project.appspot.com",
    messagingSenderId: "179065380579",
    appId: "1:179065380579:web:b30dadc65958ac1614efd6",
    measurementId: "G-Z20Z17F3TW"
  };
  firebase.firestore().settings({ timestampsInSnapshots: true })
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase