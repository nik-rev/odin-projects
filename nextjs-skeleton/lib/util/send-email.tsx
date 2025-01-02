import { render } from "@react-email/components";
import { Resend } from "resend";

import { SOURCE } from "@/constants";
import AuthEmail from "@/emails/auth";

import env from "../schema/env";

const resend = new Resend(env.EMAIL_SERVER_PASSWORD);

export const sendEmail = async (
  email: string,
  subject: string,
  body: JSX.Element,
) => {
  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    html: render(body),
    to: email,
    subject,
  });

  if (error) {
    throw error;
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${SOURCE}/new-verification?token=${token}`;

  await sendEmail(
    email,
    "Confirm your email",
    AuthEmail({
      url: confirmLink,
      content: {
        preview: "Email verification",
        text: "Verify your email",
        linkText: "Click here to confirm email",
      },
    }),
  );
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${SOURCE}/new-password?token=${token}`;

  await sendEmail(
    email,
    "Reset your password",
    AuthEmail({
      url: resetLink,
      content: {
        preview: "Password Reset",
        text: "Reset your password",
        linkText: "Click here to reset your password",
      },
    }),
  );
};
