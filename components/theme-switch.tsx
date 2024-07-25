"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleClick = () => {
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button type="button" onClick={handleClick}>
      change theme
    </button>
  );
}
