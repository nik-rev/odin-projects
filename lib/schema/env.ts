import typeSafeObjectFromEntries from "@/lib/wrapper/Object.fromEntries";
import { z } from "zod";

const envVariables = [
  "NEXTAUTH_SECRET",
  "DATABASE_URL",
  "DIRECT_URL",
  "AUTH_GITHUB_ID",
  "AUTH_GITHUB_SECRET",
  "EMAIL_FROM",
  "EMAIL_SERVER_PASSWORD",
  "EMAIL_SERVER_USER",
  "EMAIL_SERVER_HOST",
  "EMAIL_SERVER_PORT",
] as const;

const envSchema = z.object(
  typeSafeObjectFromEntries(
    envVariables.map((envVariable) => [envVariable, z.string().min(1)]),
  ),
);

const env = envSchema.parse(process.env);

export default env;
