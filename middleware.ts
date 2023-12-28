import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth: (auth, req, evt) => {
    // Handle users who are not authenticated
    if (!auth.user && !auth.isPublicRoute) {
      return redirectToSignIn({returnBackUrl: req.url})
    }

    // if the user is logged in and trying to access a protected route
    if (auth.user && auth.isPublicRoute) {
      return NextResponse.next();
    }

    // Allow users visiting public routes to access them
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};