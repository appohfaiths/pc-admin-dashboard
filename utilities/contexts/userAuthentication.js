'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onIdTokenChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig';
import nookies from 'nookies';

export const UserAuthenticationContext = createContext({ user: null });

export default function UserAuthenticationContextProvider({ children }) {
  const [user, setUser] = useState({});

  const router = useRouter();

  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onIdTokenChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      } else {
        const uid = user.uid;
        const token = await user.getIdToken();
        setUser(user);
        console.log(user);
        nookies.set(undefined, 'token', token, { path: '/admin' });
        router.push('/admin');
      }
    });
  }, []);

  return (
    <UserAuthenticationContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthenticationContext.Provider>
  );
}

export const useAuth = () => useContext(UserAuthenticationContext);
