import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    // My config
    apiKey: "AIzaSyCAZO3B6s2kQc6ShlkApQ89hnvTYQFhvww",
    authDomain: "chatapp-282bf.firebaseapp.com",
    projectId: "chatapp-282bf",
    storageBucket: "chatapp-282bf.appspot.com",
    messagingSenderId: "312152807790",
    appId: "1:312152807790:web:0fd7b69829fca776f4097f"
};

let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };