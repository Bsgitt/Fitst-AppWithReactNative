

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAA3uRy75U6hrNEPvOvvgSkrEUxWGOA4xQ",
    authDomain: "t0dolist.firebaseapp.com",
    databaseURL: "https://t0dolist.firebaseio.com",
    projectId: "t0dolist",
    storageBucket: "t0dolist.appspot.com",
    messagingSenderId: "813878582325",
    appId: "1:813878582325:web:b9adb2e70d70431991657c",
    measurementId: "G-9EEGYVNPW0"
  }

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;