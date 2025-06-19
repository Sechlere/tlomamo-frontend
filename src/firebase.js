import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDx0odtvFvmaQIxoHiI2sIby3qNQv0V5Sg",
  authDomain: "http://tlhomamo-ffc9e.firebaseapp.com/",
  projectId: "tlhomamo-ffc9e",
  storageBucket: "tlhomamo-ffc9e.appspot.com",
  messagingSenderId: "11801233410",
  appId: "1:11801233410:web:92bfdbe72d05e4ed1aff1b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
