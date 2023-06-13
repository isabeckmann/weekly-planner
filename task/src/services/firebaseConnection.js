import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; //autenticação de usuário, para cadastro e login

const firebaseConfig = {
  apiKey: "AIzaSyBgLlPUzo6LV-p-5RRHE1VHHouHn9mj1es",
  authDomain: "weekly-planner-41999.firebaseapp.com",
  projectId: "weekly-planner-41999",
  storageBucket: "weekly-planner-41999.appspot.com",
  messagingSenderId: "895599941341",
  appId: "1:895599941341:web:9369091279d81b61b76d34",
  measurementId: "G-5W3S9MZ59J",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
