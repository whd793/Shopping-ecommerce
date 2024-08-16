import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLzZsLdMP1kIu7woLo9TxsqHp861qp63Q',
  authDomain: 'shopping-ecom-640d8.firebaseapp.com',
  projectId: 'shopping-ecom-640d8',
  storageBucket: 'shopping-ecom-640d8.appspot.com',
  messagingSenderId: '24881389789',
  appId: '1:24881389789:web:5ea2191148686641003b34',
  measurementId: 'G-GL0B6EZWWD',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
