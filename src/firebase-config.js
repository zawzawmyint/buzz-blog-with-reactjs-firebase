// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVDFxc-iIATjjMad_FO9ldaN5y7kArRGI",
  authDomain: "speech-blog.firebaseapp.com",
  projectId: "speech-blog",
  storageBucket: "speech-blog.appspot.com",
  messagingSenderId: "1070570511931",
  appId: "1:1070570511931:web:2df2b9d8cd828186e3861e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvier = new GoogleAuthProvider();
export const githubProvier = new GithubAuthProvider();
