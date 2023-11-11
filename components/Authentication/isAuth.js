"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";


export default function isAuth(Component) {
  return function IsAuth(props) {
const auth = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
      if (!auth) {
        return redirect("/");
      }
    }, []);


    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}