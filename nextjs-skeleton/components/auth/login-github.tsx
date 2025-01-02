"use client";

import { login } from "@/actions/auth";

export default function LoginGithub() {
  return (
    <button
      onClick={async () => {
        await login("github");
      }}
      type="button"
    >
      <p className="text-black">Login with GitHub</p>
    </button>
  );
}
