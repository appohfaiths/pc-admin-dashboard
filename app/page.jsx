'use client';

import { useAuth } from '../utilities/contexts/userAuthentication';

export default function Home() {
  const { login } = useAuth();
  return (
    <main className="bg-red-500">
      <div className="text-3xl">PC Admin Dashboard</div>
      <div onClick={login}>Login</div>
    </main>
  );
}
