import Nav from "@/components/nav";
import ThemeSwitch from "@/components/theme/theme-switch";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/wrapper/theme-provider";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <ThemeSwitch />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
