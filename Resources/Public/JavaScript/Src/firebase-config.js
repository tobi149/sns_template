  var firebaseConfig = {
    apiKey: "AIzaSyAEH4-GOxvvTgmIP5DXgQAUKacFLTuczUI",
    authDomain: "silas-stoehr.firebaseapp.com",
    databaseURL: "https://silas-stoehr-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "silas-stoehr",
    storageBucket: "silas-stoehr.appspot.com",
    messagingSenderId: "606726127780",
    appId: "1:606726127780:web:bb781a8cd9450472446631",
    measurementId: "G-796Y4VFDD9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true, merge:true }); 
  const analytics = firebase.analytics();
  firebase.analytics().logEvent('notification_received');