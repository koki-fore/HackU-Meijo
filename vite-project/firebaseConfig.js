// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PRACTICE_API_KEY,
  authDomain: process.env.PRACTICE_AUTH_DOMAIN,
  projectId: process.env.PRACTICE_PROJECT_ID,
  storageBucket: process.env.PRACTICE_STORE_BUCKET,
  messagingSenderId: process.env.PRACTICE_MESSAGING_SENDER_ID,
  appId: process.env.PRACTICE_APP_ID,
  measurementId: process.env.PRACTICE_MEASUREMENT_ID
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase
const analytics = getAnalytics(firebase);