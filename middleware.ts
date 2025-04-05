import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
const authRoutes = ["/log-in"];
const handleI18nRouting = createMiddleware(routing);
const PROTECTED_ROUTES = ["/menu-games", "/menu-games/:path*"];

export default function middleware (request : NextRequest){ const currentUser = request.cookies.get("currentUser")?.value;
   // Check for cookie
  const memo = cookies().get("token");
  if(PROTECTED_ROUTES.includes(request.nextUrl.pathname)){
    if(!memo || !currentUser){  NextResponse.redirect(new URL("/log-in", request.url))  }
    // Validate the cookie

    }
    else{
      return handleI18nRouting(request);
    }
  }
 

 
export const config = {unstable_allowDynamic: [
  // allows a single file
  '/api/fetch-user/route.ts',
  '/api/log-in/route.ts',
  '/api/sign-up/route.ts',
  // use a glob to allow anything in the function-bind 3rd party module
  //'**/node_modules/function-bind/**'
  
],
  // Match only internationalized pathnames
  matcher: ['/', '/(fa|en)']
};