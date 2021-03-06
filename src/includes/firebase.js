import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpVLSNUIbacaE0AwHGI0Il8Z-eP3zxino',
  authDomain: 'music-1da3d.firebaseapp.com',
  projectId: 'music-1da3d',
  storageBucket: 'music-1da3d.appspot.com',
  messagingSenderId: '802044429576',
  appId: '1:802044429576:web:a862d17e87f24f6b0658bd',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth, db, usersCollection, songsCollection, commentsCollection, storage,
};
