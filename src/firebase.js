import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6RQS_-yqxt8b6RWwZhNmAXYJxKZIQ4wY",
  authDomain: "inboxiq-77448.firebaseapp.com",
  projectId: "inboxiq-77448",
  storageBucket: "inboxiq-77448.firebasestorage.app",
  messagingSenderId: "377107525113",
  appId: "1:377107525113:web:ba3d1f56a0010bdbd5a128",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export {
  signInWithPopup,
  signOut,
};
