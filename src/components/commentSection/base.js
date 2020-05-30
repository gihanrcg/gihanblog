import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuWWgayiji7lDu0pa4N_Ekxs5qfj2K2DY",
    authDomain: "gihanblog-970f3.firebaseapp.com",
    databaseURL: "https://gihanblog-970f3.firebaseio.com",
    projectId: "gihanblog-970f3",
    storageBucket: "gihanblog-970f3.appspot.com",
    messagingSenderId: "1068698535171",
    appId: "1:1068698535171:web:2f4cf9cc8ae511ae315536",
    measurementId: "G-KDWVVYN6JN"
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
    facebook: new firebase.auth.FacebookAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebaseApp.auth();
export default base;