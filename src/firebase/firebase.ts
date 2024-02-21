import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBghImnpxYICJgCBqTGywmlUcOknzm3Dlk",
    authDomain: "synergy-402411.firebaseapp.com",
    projectId: "synergy-402411",
    storageBucket: "synergy-402411.appspot.com",
    messagingSenderId: "250691390401",
    appId: "1:250691390401:web:4ce41aa7b64a892db07d40",
    measurementId: "G-3GK53CVMCV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export var provider = new firebase.auth.GoogleAuthProvider();

