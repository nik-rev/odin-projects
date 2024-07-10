import { auth } from "@/auth";
import Link from "next/link";

import Logout from "./auth/Logout";

export default async function Nav() {
  const session = await auth();

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/protected">Protected</Link>

      {session?.user ? (
        <>
          <pre>{JSON.stringify(session)}</pre>
          <Logout />
        </>
      ) : (
        <>
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </>
      )}
    </>
  );
}
