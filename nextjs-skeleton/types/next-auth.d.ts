/* eslint "@typescript-eslint/consistent-type-definitions": "off", "@typescript-eslint/no-empty-interface": "off" --
 * This approach is required to get correct type definitions: https://authjs.dev/getting-started/typescript */
import type { UserRole } from "@prisma/client";
import type { DefaultSession } from "next-auth";

type CustomUserProperties = {
  readonly isTwoFactorEnabled: boolean;
  readonly isOAuth: boolean;
  readonly role: UserRole;
};

declare module "next-auth" {
  interface JWT extends CustomUserProperties {}

  interface Session {
    readonly user: DefaultSession["user"] & CustomUserProperties;
  }
}
