// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBZum6AGJSvTtrv_CzR3SVqk4RAiFwQU_8',
  authDomain: 'pc-admin-dashboard.firebaseapp.com',
  projectId: 'pc-admin-dashboard',
  storageBucket: 'pc-admin-dashboard.appspot.com',
  messagingSenderId: '726847720811',
  appId: '1:726847720811:web:798317f6db545afcd9902e',
  measurementId: 'G-Z4G75V8N61',
};

if (typeof window !== undefined && !getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export const analytics = () => {
  if (typeof window !== 'undefined') {
    return getAnalytics(app);
  } else {
    return null;
  }
};

export {auth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut}

export default firebaseConfig;
