import { auth } from "@/auth";
import Link from "next/link";

import Logout from "./Logout";

export default async function Navbar() {
  const session = await auth();

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/protected">Protected</Link>
      <Link href="/server">Server</Link>

      {session?.user ? (
        <>
          <pre>{JSON.stringify(session)}</pre>
          <Logout />
        </>
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </>
  );
}
