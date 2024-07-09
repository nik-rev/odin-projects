"use client";

import { FaGithub } from "react-icons/fa";
import { login } from "@/actions/auth";

export default function LoginGithub() {
  return (
    <div>
      <FaGithub />
      <button onClick={() => login("github")} className="bg-red-200">
        Login with GitHub
      </button>
    </div>
  );
}
