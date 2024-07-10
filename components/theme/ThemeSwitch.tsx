"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
      }
    >
      change theme
    </button>
  );
}
