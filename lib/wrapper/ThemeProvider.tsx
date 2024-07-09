"use client";

import { ThemeProvider } from "next-themes";

// We need this wrapper so that we don't turn our entire application into a client component. The {children} can still be server components this way.
export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
}
