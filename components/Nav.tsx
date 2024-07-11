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
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </>
  );
}
