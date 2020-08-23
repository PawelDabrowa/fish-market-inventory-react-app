import Rebase from 're-base'; 
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDo7WC670pp4J0cLmYgXSvD6GTzm0wFB_4",
    authDomain: "catch-of-the-day-c383d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-c383d.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebase }

export { firebaseApp };

export default base;