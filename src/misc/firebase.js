import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyD4fR89UA_3_X_LBqOzzm_Glf9NpgkBFh4",

  authDomain: "chat-web-app-83225.firebaseapp.com",

  projectId: "chat-web-app-83225",

  storageBucket: "chat-web-app-83225.appspot.com",

  messagingSenderId: "12735673270",

  appId: "1:12735673270:web:3cfd1c89b047fca7dec717",
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
