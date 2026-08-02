import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const accessToken =
    request.cookies.get("accessToken")?.value;

  const pathname = request.nextUrl.pathname;

  const isProtectedRoute =
    pathname.startsWith("/provider") ||
    pathname.startsWith("/customer") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/profile");

  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/provider/:path*",
    "/customer/:path*",
    "/admin/:path*",
    "/profile/:path*",
  ],
};