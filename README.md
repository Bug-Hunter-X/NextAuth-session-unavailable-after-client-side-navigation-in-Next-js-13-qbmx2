# NextAuth Session Issue in Next.js 13 Client-Side Routing

This repository demonstrates a bug encountered when using NextAuth.js for authentication in a Next.js 13 application. The session object is successfully retrieved on the server-side, but becomes null after client-side navigation to a protected route.

## Problem Description

The application uses NextAuth.js for authentication.  Server-side rendering works correctly; the session object is properly populated and used to render protected pages. However, once a client-side navigation (using Next.js's Link component) occurs to a protected route, the session object is null, leading to unexpected behavior.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the `/about` page. 
5. Observe that the session object is properly populated (if you are logged in).
6. Navigate to the `/` page (home) and then back to `/about` via the link.  Observe that the session object is now null causing errors.

## Expected Behavior

The session object should be consistently available regardless of whether the page is rendered server-side or client-side.

## Actual Behavior

The session object is only available on the initial server-side render. Subsequent client-side navigations result in a null session object.

## Potential Causes

- Incorrect use of `getServerSession`
- Client-side hydration issue
- Caching issues

## Workaround

The issue might be resolved by using a different authentication approach or refactoring how session data is managed. For example, a possible fix could be handling the session check within the `getStaticProps` or `getServerSideProps` method.

Please assist in resolving this issue.
