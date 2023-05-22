import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";

let app;
if (!getApps().length) {
  app = initializeApp(
    {
apiKey: "AIzaSyDkw5kEseKgrPHPHXVL9wllnb-ghjHtk1c",
  authDomain: "code-98bc2.firebaseapp.com",
  projectId: "code-98bc2",
  storageBucket: "code-98bc2.appspot.com",
  messagingSenderId: "342168547219",
  appId: "1:342168547219:web:0007e03923964c1209c266"    },
    "code"
  );
} else {
  app = getApps()[0]; // if already initialized, use that one
}
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
