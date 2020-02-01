import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBz1Rb8MzhFKYcQcqFvFO8pjEN4nZHzRLA",
  authDomain: "ecommerce-db-64b38.firebaseapp.com",
  databaseURL: "https://ecommerce-db-64b38.firebaseio.com",
  projectId: "ecommerce-db-64b38",
  storageBucket: "ecommerce-db-64b38.appspot.com",
  messagingSenderId: "1080668249556",
  appId: "1:1080668249556:web:beae4413c13023c2e80a41",
  measurementId: "G-YZMBHB1P5W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  console.log(userRef);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
