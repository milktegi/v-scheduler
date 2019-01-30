 import firebase from 'firebase/app';

 //database
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJ6ihHjw9I3u_VeAKekC7mSiw0eLvdhh0",
    authDomain: "v-scheduler-wi.firebaseapp.com",
    databaseURL: "https://v-scheduler-wi.firebaseio.com",
    projectId: "v-scheduler-wi",
    storageBucket: "v-scheduler-wi.appspot.com",
    messagingSenderId: "1081113908344"
  };
  firebase.initializeApp(config);
	firebase.firestore().settings({
		timestampsInSnapshots: true
	})

	export default firebase;