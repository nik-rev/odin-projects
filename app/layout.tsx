import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import Nav from "@/components/nav";
import ThemeSwitch from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/lib/wrapper/theme-provider";

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
    // suppressHydrationWarning will only suppress <html> and not <body> or any descendants, this supression is required due to next-themes https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html suppressHydrationWarning lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
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
