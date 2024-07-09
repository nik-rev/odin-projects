import ThemeProvider from "@/lib/wrapper/ThemeProvider";
import ThemeSwitch from "@/components/ThemeSwitch";
import Navbar from "@/components/Navbar";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
