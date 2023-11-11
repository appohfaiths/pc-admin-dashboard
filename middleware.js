// import { NextResponse } from "next/server";
// import { isAuthenticated } from "@/Utils/Auth";

const protectedRoutes = ["/settings"];


export default function middleware(req) {
//   if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/", req.nextUrl.origin);
//     return NextResponse.redirect(absoluteURL.toString());
//   }
}