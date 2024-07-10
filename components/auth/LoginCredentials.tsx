"use client";

import { loginWithCredentials } from "@/actions/auth";

import AuthButton from "./AuthButton";

// TODO: validate with zod
export default function LoginCredentials() {
  return (
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
  );
}
