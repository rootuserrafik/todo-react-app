import firebase from "firebase";
   //* Your web app's Firebase configuration */
const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyCE16LFP9_GUrLQVaWqcZnDYmG_qT9nXMI",
    authDomain: "todo-app-9a443.firebaseapp.com",
    databaseURL: "https://todo-app-9a443.firebaseio.com",
    projectId: "todo-app-9a443",
    storageBucket: "todo-app-9a443.appspot.com",
    messagingSenderId: "851482973864",
    appId: "1:851482973864:web:5d00bd47534681aefa549d",
    measurementId: "G-5X2KF68X5X"
});
const db = firebaseConfig.firestore();
export default db;