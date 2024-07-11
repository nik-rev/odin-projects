"use server";

import ForgotPasswordEmail from "@/emails/reset-password";
import { APPLICATION_NAME } from "@/constants";
import env from "@/lib/schema/env";
import { Resend } from "resend";

const resend = new Resend(env.EMAIL_SERVER_PASSWORD);

export const forgotPassword = async (formData: FormData) => {
  const { error, data } = await resend.emails.send({
    from: `${APPLICATION_NAME} <${env.EMAIL_FROM}>`,
    html: render(ForgotPasswordEmail({ url })),
    subject: "Password Reset Email",
    to: [formData.email],
  });
};
