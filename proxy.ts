import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const pathname = request.nextUrl.pathname;

  const isProviderRoute = pathname.startsWith("/provider");

  if (isProviderRoute && !accessToken) {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/provider/:path*"],
};
