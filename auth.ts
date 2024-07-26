import { PrismaAdapter } from "@auth/prisma-adapter";
import { render } from "@react-email/components";
import bcrypt from "bcryptjs";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

import env from "@/lib/schema/env";

import AuthEmail from "./emails/auth";
import { LoginSchema } from "./lib/schema/login";
import db from "./prisma";

export const {
  handlers: { POST, GET },
  signOut,
  signIn,
  auth,
} = nextAuth({
  providers: [
    Resend({
      sendVerificationRequest: async (parameters) => {
        const { identifier: to, provider, url } = parameters;
        const { host } = new URL(url);
        const response = await fetch("https://api.resend.com/emails", {
          body: JSON.stringify({
            text: ({
              hostText,
              urlText,
            }: {
              readonly hostText: string;
              readonly urlText: string;
            }) => {
              return `Sign in to ${hostText}\n${urlText}\n\n`;
            },
            html: render(
              AuthEmail({
                url,
                content: {
                  preview: "Magic Link Login",
                  text: "Your magic link is below, click to login.",
                  linkText: "Login using Magic Link",
                },
              }),
            ),
            subject: `Sign in to ${host}`,
            from: provider.from,
            to,
          }),
          headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        if (!response.ok) {
          throw new Error(
            `Resend error: ${JSON.stringify(await response.json())}`,
          );
        }
      },
      server: {
        host: {
          auth: {
            pass: env.EMAIL_SERVER_PASSWORD,
            user: env.EMAIL_SERVER_USER,
          },
          host: env.EMAIL_SERVER_HOST,
          port: env.EMAIL_SERVER_PORT,
        },
      },
      apiKey: env.EMAIL_SERVER_PASSWORD,
      from: env.EMAIL_FROM,
    }),
    GitHub({
      clientSecret: env.AUTH_GITHUB_SECRET,
      clientId: env.AUTH_GITHUB_ID,
    }),
    Credentials({
      authorize: async (credentials) => {
        const validatedCredentials = await LoginSchema.spa(credentials);

        if (validatedCredentials.success) {
          const { email, password } = validatedCredentials.data;

          const user = await db.user.findUnique({
            where: {
              email,
            },
          });

          if (!user?.password) {
            return null;
          }

          const isCorrectPassword = await bcrypt.compare(
            password,
            user.password,
          );

          if (isCorrectPassword) {
            return user;
          }
        }

        return null;
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
    }),
  ],
  callbacks: {
    jwt: async ({ token }) => {
      if (!token.sub) {
        return token;
      }

      const existingUser = await db.user.findUnique({
        where: {
          id: token.sub,
        },
      });

      if (!existingUser) {
        return token;
      }

      const existingAccount = await db.account.findUnique({
        where: { id: existingUser.id },
      });

      const extraTokenProperties = {
        isOAuth: Boolean(existingAccount),
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
        isTwoFactorEnabled: existingUser.isTwoFactorEnabled,
      };

      return { ...token, ...extraTokenProperties };
    },
    session: ({ session, token }) => {
      const extraUserProperties = {
        isTwoFactorEnabled: token.isTwoFactorEnabled,
        isOAuth: token.isOAuth,
        role: token.role,
        id: token.sub,
      };

      const newUser = { ...session.user, ...extraUserProperties };
      return { ...session, user: newUser };
    },
    signIn: async ({ account, user }) => {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await db.user.findUnique({
        where: { id: user.id },
      });

      if (existingUser?.isTwoFactorEnabled) {
        const isTwoFactorVerified =
          await db.twoFactorConfirmation.verifyUserTwoFactorById(
            existingUser.id,
          );
        if (!isTwoFactorVerified) {
          return false;
        }
      }

      // Grant access if email is verified
      return Boolean(existingUser?.emailVerified);
    },
  },
  events: {
    linkAccount: async ({ user }) => {
      await db.user.update({
        data: { emailVerified: new Date() },
        where: { id: user.id },
      });
    },
  },
  pages: {
    newUser: "/register",
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(db),
});
