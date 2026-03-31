import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js"; 

 const firebaseConfig = {
    apiKey: "AIzaSyCPT7Rnn5VN5PXUkYO0PO339nECl6YsTsg",
    authDomain: "urbanthreadsstoree.firebaseapp.com",
    projectId: "urbanthreadsstoree",
    storageBucket: "urbanthreadsstoree.firebasestorage.app",
    messagingSenderId: "129093253988",
    appId: "1:129093253988:web:6588483c481d75c45f5871",
    measurementId: "G-XE3H19GXJV"
  };

  const app = initializeApp(firebaseConfig);
  let analytics;
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    console.log("Analytics not supported");
  }  

  export const auth = getAuth(app);
  export const db = getFirestore(app);