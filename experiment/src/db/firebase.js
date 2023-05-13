// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FBAPI,
   authDomain: "psych-exp-8bd6c.firebaseapp.com",
   projectId: "psych-exp-8bd6c",
   storageBucket: "psych-exp-8bd6c.appspot.com",
   messagingSenderId: "673878833952",
   appId: "1:673878833952:web:3a2c4939850584ad49b545",
   measurementId: "G-X1R5XWPXHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
