
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbnBBYyssAeHvN-yI_yvhCVy2yxchOcwk",
  authDomain: "fir-76626.firebaseapp.com",
  projectId: "fir-76626",
  storageBucket: "fir-76626.appspot.com",
  messagingSenderId: "429698198575",
  appId: "1:429698198575:web:6bf700a3592069a294aada",
  measurementId: "G-NB4RYVT8KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;