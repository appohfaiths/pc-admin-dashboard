'use client';
import isAuth from '../../components/Authentication/isAuth'
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

import Sidebar from '../../components/sidebar';
import TopBar from '../../components/topBar';

const AdminLayout = ({ children }) => {
   const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
   if(!isAuth) {
        redirect("/");
    }
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

export default AdminLayout;
// export default isAuth(AdminLayout); using HOC for protected routes