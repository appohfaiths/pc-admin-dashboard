'use client';
import { useEffect, useState } from 'react';
import Login from '../components/Authentication/Login'
import CreateAccount from '../components/Authentication/CreateAccount';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../store/features/user/authSlice';
import { auth, onAuthStateChanged } from '../utilities/firebase/firebaseconfig';
import { useRouter } from 'next/navigation';

const initialValues = {
    username: '',
    email: '',
    password: ''
  };


export default function Home() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const router = useRouter()
  const [formMode, setFormMode] = useState('login')

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

  const toggleFormMode = () => {
    setFormMode(formMode === 'login' ? 'create' : 'login')
  }


  return (
    <main className="text-center">
      <h3 className="text-3xl my-5">PC Admin Dashboard</h3>
      {formMode === 'login' && !user && (<Login {...initialValues} />)}
      
      {formMode === 'create' && <CreateAccount {...initialValues} />}
      
      {/* <div className="my-5" onClick={login}>Login with Google</div> */}
      <button className="my-5" onClick={toggleFormMode}>
        {formMode === 'login' ? 'Create Account' : 'Login'}
      </button>
    </main>
  );
}