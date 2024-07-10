import credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import github from "next-auth/providers/github";
import env from "@/lib/schema/env";
import nextAuth from "next-auth";
import bcrypt from "bcryptjs";

import { saltAndHashPassword } from "./lib/util/salt-and-hash-password";
import db from "./prisma";

export const {
  handlers: { POST, GET },
  signOut,
  signIn,
  auth,
} = nextAuth({
  providers: [
    github({
      clientSecret: env.AUTH_GITHUB_SECRET,
      clientId: env.AUTH_GITHUB_ID,
    }),
    credentials({
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (user) {
          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.password as string,
          );
          if (!isMatch) {
            throw new Error("Incorrect password");
          }
        }
        return user;
      },
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
        email: {
          label: "Email",
          type: "email",
        },
      },
      name: "Credentials",
    }),
  ],
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(db),
});
