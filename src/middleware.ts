import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const AUTH_PAGES = ["/signin", "/signup"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({ request: { headers: req.headers } });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = new URL(req.url).pathname;
  const isAuthRoute = AUTH_PAGES.includes(pathname);
  if (!user && (pathname === "/" || (!isAuthRoute && !req.nextUrl.pathname.startsWith("/api")))) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  if (user && (isAuthRoute || pathname === "/")) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/clients/:path*", "/policies/:path*", "/reminders/:path*", "/settings/:path*", "/signin", "/signup"],
};


