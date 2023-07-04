'use client';

import { useAuth } from '../utilities/contexts/userAuthentication';
import Login from '../components/Authentication/Login'

const initialValues = {
    email: '',
    password: ''
  };


export default function Home() {
  // const { login } = useAuth();
  return (
    <main className="text-center">
      <h3 className="text-3xl my-5">PC Admin Dashboard</h3>
      <Login {...initialValues} />
      {/* <div className="my-5" onClick={login}>Login with Google</div> */}
    </main>
  );
}
