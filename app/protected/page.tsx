import { auth } from "@/auth";

export default async function ProtectedRoute() {
  const session = await auth();
  return (
    <div>
      Protected Route
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
