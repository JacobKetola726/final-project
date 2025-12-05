import { NextResponse } from "next/server";

export function middleware(req) {
  // In Next.js middleware, cookies can be read via req.cookies.get
  const loggedInCookie = req.cookies.get("loggedIn");

  // Protect any route that starts with /preorder
  if (req.nextUrl.pathname.startsWith("/preorder")) {
    if (!loggedInCookie) {
      // redirect to /login if not logged in
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
