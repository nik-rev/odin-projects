// Why this approach is required to get correct type definitions: https://authjs.dev/getting-started/typescriptimport { DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";

interface CustomUserProperties {
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  role: UserRole;
}

declare module "next-auth" {
  interface JWT extends CustomUserProperties {}

  interface Session {
    user: DefaultSession["user"] & CustomUserProperties;
  }
}
