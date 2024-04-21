import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbwDaHaTkiMEFgaI5jSu65tvdRGH7stfo",
  authDomain: "netflix-react-clone-363eb.firebaseapp.com",
  projectId: "netflix-react-clone-363eb",
  storageBucket: "netflix-react-clone-363eb.appspot.com",
  messagingSenderId: "734916484204",
  appId: "1:734916484204:web:ba2cceb334168c1e434c49",
  measurementId: "G-HB5EZT6BVB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
