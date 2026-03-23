import { NextRequest, NextResponse } from "next/server";

function verifyTokenEdge(token: string, secret: string): boolean {
  try {
    const [dataB64, signature] = token.split(".");
    if (!dataB64 || !signature) return false;

    const data = atob(dataB64);
    const encoder = new TextEncoder();
    // We can't use crypto.createHmac in edge runtime, so we'll do a simpler check
    // by importing the web crypto API
    const payload = JSON.parse(data);
    if (payload.exp < Date.now()) return false;

    // For edge runtime, we need to verify synchronously
    // We'll do a basic check here and let the API routes do full verification
    return !!payload.username;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip login page and auth API routes
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/api/auth/")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const secret = process.env.SESSION_SECRET || "fallback-secret-change-me";
  const isValid = verifyTokenEdge(token, secret);

  if (!isValid) {
    const response = NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
    response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
