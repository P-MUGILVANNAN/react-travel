// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnWmm1wnPHOVRyT0MTP_qBkC1bPjG47LQ",
  authDomain: "hisample-a7b27.firebaseapp.com",
  projectId: "hisample-a7b27",
  storageBucket: "hisample-a7b27.appspot.com",
  messagingSenderId: "303516881893",
  appId: "1:303516881893:web:7e946babddfea73457d50c",
  measurementId: "G-2MCJKBGWKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;