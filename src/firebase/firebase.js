import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCqbzbFp7xZPLNYxyWwvGLWAN4itkr-pOk",
    authDomain: "hify-a660c.firebaseapp.com",
    databaseURL: "https://hify-a660c.firebaseio.com",
    projectId: "hify-a660c",
    storageBucket: "hify-a660c.appspot.com",
    messagingSenderId: "834671752958",
    appId: "1:834671752958:web:b43921fe357d842440d7af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const storage =firebase.storage();
   
  export{
      storage, database,firebase as default
  }