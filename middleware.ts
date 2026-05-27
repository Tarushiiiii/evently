import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Public routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/events/(.*)',

  '/sign-in(.*)',
  '/sign-up(.*)',

  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static files
     */
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};