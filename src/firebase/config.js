//Importaciones
import app from 'firebase/app';
import firebase from 'firebase';

//Codigo de la pagina de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBYxvNB5eiqWWmT8qO9aMvhxnbz2eSezF8",
    authDomain: "reactn-39506.firebaseapp.com",
    projectId: "reactn-39506",
    storageBucket: "reactn-39506.appspot.com",
    messagingSenderId: "1052867337748",
    appId: "1:1052867337748:web:02b75089832f2c6d9b1101"
  };

  
app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();