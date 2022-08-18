import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrZsR2RkA1vlWA_bHZIkkt5HN--S86Umg",
  authDomain: "backend-myapp.firebaseapp.com",
  projectId: "backend-myapp",
  storageBucket: "backend-myapp.appspot.com",
  messagingSenderId: "942135474217",
  appId: "1:942135474217:web:d5166a42c46f1903d0c438"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)