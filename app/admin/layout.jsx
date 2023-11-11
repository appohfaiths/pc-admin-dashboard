'use client';
import { useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

import Sidebar from '../../components/sidebar';
import TopBar from '../../components/topBar';

export default function AdminLayout({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/")
    }
  },[])
  
  return (
    <main>
      <TopBar />
      <section className="flex">
        <Sidebar />
        <section className="w-full border-4 border-red-500">{children}</section>
      </section>
    </main>
  );
}
