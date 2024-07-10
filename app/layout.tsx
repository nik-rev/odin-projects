import ThemeSwitch from "@/components/theme/ThemeSwitch";
import ThemeProvider from "@/lib/wrapper/ThemeProvider";
import Nav from "@/components/Nav";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning /* next-themes updates <html> */ lang="en">
      <body>
        <ThemeProvider>
          <ThemeSwitch />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
