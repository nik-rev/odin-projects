import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <button type="button">
        {session?.user.isTwoFactorEnabled ? "Disable" : "Enable"} 2FA
      </button>
      <br />
      2FA: {session?.user.isTwoFactorEnabled ? "ON" : "OFF"}
    </div>
  );
}
