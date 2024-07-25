import Link from "next/link";

import { auth } from "@/auth";

import Logout from "./auth/logout";

export default async function Nav() {
  const session = await auth();

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/protected">Protected</Link>

      {session?.user ? (
        <>
          <Link href="/settings">Settings</Link>
          <pre>{JSON.stringify(session)}</pre>
          <Logout />
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </>
  );
}
