import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXqXvWd4jA7xstEKxPFPU4zcH2MkFlz-I",
  authDomain: "tp-bot-1.firebaseapp.com",
  databaseURL: "https://tp-bot-1-default-rtdb.firebaseio.com",
  projectId: "tp-bot-1",
  storageBucket: "tp-bot-1.appspot.com",
  messagingSenderId: "988753725738",
  appId: "1:988753725738:web:275b114c4a3f0aefb43653",
  measurementId: "G-32EXZBEBEP",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
