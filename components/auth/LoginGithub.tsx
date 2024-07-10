"use client";

import { login } from "@/actions/auth";

export default function LoginGithub() {
  return (
    <button onClick={() => login("github")}>
      <p className="text-black">Login with GitHub</p>
    </button>
  );
}
