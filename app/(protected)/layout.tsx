import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { UNAUTHENTICATED_REDIRECT } from "@/constants";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    redirect(UNAUTHENTICATED_REDIRECT);
  }

  return <>{children}</>;
}
