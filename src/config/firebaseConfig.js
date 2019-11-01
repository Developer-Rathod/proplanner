import firebase from 'firebase/app'; // app
import 'firebase/firestore'; //database
import 'firebase/auth'; // authentication

// Initialize firebase configuration from firebase project from google.

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  firebase.firestore().settings({ timestampsInSnapshots: true })

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase
