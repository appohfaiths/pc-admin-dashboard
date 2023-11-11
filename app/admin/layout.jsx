'use client';
import isAuth from '../../components/Authentication/isAuth'

import Sidebar from '../../components/sidebar';
import TopBar from '../../components/topBar';

 const AdminLayout = ({ children }) => {
  
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

export default isAuth(AdminLayout);