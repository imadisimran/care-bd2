// proxy.js
import { NextResponse } from 'next/server';
import { authMiddleware } from 'next-firebase-auth-edge';

export async function proxy(request) {
  return authMiddleware(request, {
    // The middleware will automatically handle POST requests to these paths
    loginPath: '/api/login',
    logoutPath: '/api/logout',
    
    // Firebase Project Configuration
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    cookieName: 'AuthToken',
    cookieSignatureKeys: [process.env.COOKIE_SECRET_KEY],
    cookieSerializeOptions: {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Must be true in production
      sameSite: 'lax',
      maxAge: 12 * 60 * 60 * 24, // 12 days
    },
    
    // Service account is required to verify signatures
    serviceAccount: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Replace escaped newlines if loading from a .env file
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    
    // Routing Logic based on Auth State
    handleValidToken: async ({ token, decodedToken }, headers) => {
      // If authenticated user visits login or register via a GET request (page load), redirect them away.
      // POST requests must be allowed through — they are server action calls (e.g. postUser) that
      // run after the auth cookie is set. Redirecting them would corrupt the server action response.
      const publicPaths = ['/login', '/register'];
      if (publicPaths.includes(request.nextUrl.pathname) && request.method === 'GET') {
        return NextResponse.redirect(new URL('/', request.url));
      }
      return NextResponse.next({ request: { headers } });
    },
    handleInvalidToken: async (reason) => {
      // Allow public routes to pass through without a valid token
      const publicPaths = ['/login', '/register'];
      if (publicPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
      }
      // Redirect unauthenticated users away from protected routes
      return NextResponse.redirect(new URL('/login', request.url));
    },
    handleError: async (error) => {
      console.error('Unhandled authentication error', { error });
      // Allow public routes to pass through on error too
      const publicPaths = ['/login', '/register'];
      if (publicPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/login', request.url));
    },
  });
}

// Define which routes the proxy should run on
export const config = {
  matcher: [
    "/login",
    "/register",
    '/api/login', 
    '/api/logout'
  ],
};