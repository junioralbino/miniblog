import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAihJf9Y8IhWCTr-MAEb8hg2U2m6x0NA4Q",
  authDomain: "miniblog-a0051.firebaseapp.com",
  projectId: "miniblog-a0051",
  storageBucket: "miniblog-a0051.appspot.com",
  messagingSenderId: "279140061459",
  appId: "1:279140061459:web:156515a89900e9538c4ae6"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };