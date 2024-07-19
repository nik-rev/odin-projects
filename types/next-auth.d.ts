// Why this approach is required to get correct type definitions: https://authjs.dev/getting-started/typescriptimport { DefaultSession } from "next-auth";
import type { UserRole } from "@prisma/client";

interface CustomUserProperties {
  readonly isTwoFactorEnabled: boolean;
  readonly isOAuth: boolean;
  readonly role: UserRole;
}

declare module "next-auth" {
  interface JWT extends CustomUserProperties {}

  interface Session {
    readonly user: DefaultSession["user"] & CustomUserProperties;
  }
}
