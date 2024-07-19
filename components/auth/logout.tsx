"use client";

import { logout } from "@/actions/auth";

export default function Logout() {
  return (
    <button
      onClick={async () => {
        await logout();
      }}
      type="button"
    >
      Log Out
    </button>
  );
}
