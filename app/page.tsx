'use client';
import { useEffect } from 'react';
import Login from '../components/Authentication/Login'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../store/features/user/authSlice';
import { auth, onAuthStateChanged } from '../utilities/firebase/firebaseconfig';
import { useRouter } from 'next/navigation';

const initialValues = {
    email: '',
    password: ''
  };


export default function Home() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
        router.push('/admin/dashboard')
      } else {
        dispatch(logout())
      }
    })
  }, [])


  return (
    <main className="text-center">
      <h3 className="text-3xl my-5">PC Admin Dashboard</h3>
      {!user && (<Login {...initialValues} />) }
      
      {/* <div className="my-5" onClick={login}>Login with Google</div> */}
    </main>
  );
}