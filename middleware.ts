import { MiddlewareConfig, NextResponse, NextRequest } from "next/server";

import { UNAUTHENTICATED_REDIRECT } from "./constants";
import { auth } from "./auth";

const protectedRoutes = ["/protected"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!session && isProtected) {
    const absoluteURL = new URL(
      UNAUTHENTICATED_REDIRECT,
      request.nextUrl.origin,
    );
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
