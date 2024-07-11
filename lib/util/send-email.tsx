import VerificationEmail from "@/emails/verify-email";
import { render } from "@react-email/components";
import { SOURCE } from "@/constants";
import { Resend } from "resend";

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
  const url = `${SOURCE}/new-verification?token=${token}`;

  await sendEmail(email, "Confirm your email", VerificationEmail({ url }));
};
