```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: { session },
  };
}

export default function About({ session }) {
  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <Link href="/">
          <a>Go to home</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session.user.name}!</p>
      <Link href="/">
          <a>Go to home</a>
        </Link>
    </div>
  );
}
```