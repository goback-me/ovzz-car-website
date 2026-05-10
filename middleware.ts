import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isProtectedPath(pathname: string) {
  return pathname.startsWith("/studio") || (pathname.startsWith("/admin") && pathname !== "/admin/login");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  const adminEmail = request.cookies.get("ovzz_admin_email")?.value;

  if (!adminEmail) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*", "/admin/:path*"],
};
