import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCM0AsUhkrmn2sw46_q0-B8h2AzUrtv1Vo",
    authDomain: "button-vpn.firebaseapp.com",
    databaseURL: "https://button-vpn.firebaseio.com",
    projectId: "button-vpn",
    storageBucket: "button-vpn.appspot.com",
    messagingSenderId: "579880195207",
    appId: "1:579880195207:web:2157b8da16a022097a1422",
    measurementId: "G-D4VMQSVJDC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const storage =firebase.storage();
   
  export{
      storage, database,firebase as default
  }