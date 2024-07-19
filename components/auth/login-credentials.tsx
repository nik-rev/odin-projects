"use client";

import { loginWithCredentials } from "@/actions/auth";
import Link from "next/link";

import AuthButton from "./auth-button";

// TODO: validate with zod
export default function LoginCredentials() {
  // const [showTwoFactor, setShowTwoFactor] = useState(false);

  // TODO: two factor auth
  // when user submits form, should show a different form where we ask for the code.

  return (
    <>
      <form action={loginWithCredentials} className="bg-orange-300">
        <label htmlFor="email">Email</label>
        <input placeholder="Email" name="email" type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          id="password"
        />
        <AuthButton />
      </form>
      <Link href="/forgot-password">Forgot password?</Link>
    </>
  );
}
