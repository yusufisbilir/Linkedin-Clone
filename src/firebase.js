import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7aal7jvJnm1LbYHkoGiRZKdLBtdKX9jQ',
  authDomain: 'linkedin-clone-c2ade.firebaseapp.com',
  projectId: 'linkedin-clone-c2ade',
  storageBucket: 'linkedin-clone-c2ade.appspot.com',
  messagingSenderId: '828886142897',
  appId: '1:828886142897:web:208d59746774560e43b790',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, provider, storage };
