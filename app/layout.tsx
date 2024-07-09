import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
