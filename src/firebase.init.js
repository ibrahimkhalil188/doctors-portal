
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD8sJbuF3LsdCrbWLSVH1AgBR3W8WhwNAo",
    authDomain: "doctor-portal-9780c.firebaseapp.com",
    projectId: "doctor-portal-9780c",
    storageBucket: "doctor-portal-9780c.appspot.com",
    messagingSenderId: "688248297369",
    appId: "1:688248297369:web:150604faf503116a7d2508"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;