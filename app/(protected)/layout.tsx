import { auth } from "@/auth";
import { UNAUTHENTICATED_REDIRECT } from "@/constants";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect(UNAUTHENTICATED_REDIRECT);
  }

  return await children;
}
