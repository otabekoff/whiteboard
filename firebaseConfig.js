import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAGXbKP37DjzecNONruE6uTqOlz1QuFYLk",
    authDomain: "whito-53e08.firebaseapp.com",
    projectId: "whito-53e08",
    storageBucket: "whito-53e08.appspot.com",
    messagingSenderId: "500740809471",
    appId: "1:500740809471:web:6a5d6be94223bb5ec422ca",
    measurementId: "G-71TR811TBP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
