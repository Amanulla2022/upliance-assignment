import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWs0vy9hNL9vNrjX4G3D-JVKcchNaY-Fo",
  authDomain: "upliance-5688f.firebaseapp.com",
  projectId: "upliance-5688f",
  storageBucket: "upliance-5688f.appspot.com",
  messagingSenderId: "515164680053",
  appId: "1:515164680053:web:6ae6255c31980a8440ad3c",
  measurementId: "G-K5LRG69QV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
