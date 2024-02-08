import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/home', request.url))

  //   console.count(request.cookies.has("auth"));
  const res = NextResponse.next();
  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about", "/dashboard/:path*", "/item", "/login", "/register", "/"],
};
