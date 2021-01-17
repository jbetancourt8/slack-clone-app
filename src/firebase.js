import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXfNY8hdssmtvmurA9JdN0DA01OtNfgy0",
  authDomain: "slack-clone-app-6da0b.firebaseapp.com",
  projectId: "slack-clone-app-6da0b",
  storageBucket: "slack-clone-app-6da0b.appspot.com",
  messagingSenderId: "655756053265",
  appId: "1:655756053265:web:c4706c7ba1cb0349985ab0",
  measurementId: "G-SM314JX1W1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
