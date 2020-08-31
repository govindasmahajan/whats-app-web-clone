import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiZKvvNkrHqtBOxdS60CwqBgif_uvaM6Q",
    authDomain: "whatsapp-clone-ba340.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-ba340.firebaseio.com",
    projectId: "whatsapp-clone-ba340",
    storageBucket: "whatsapp-clone-ba340.appspot.com",
    messagingSenderId: "106297290831",
    appId: "1:106297290831:web:91f89f48eb8faa80393a3a",
    measurementId: "G-BGHRV95QET"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;