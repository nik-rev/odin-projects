"use server";

import { render } from "@react-email/components";
import { KoalaWelcomeEmail } from "@/emails";
import env from "@/lib/schema/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: Request, response: Response) {
  return;
  const { userFirstname, email } = await request.json();

  const { error, data } = await resend.emails.send({
    html: render(KoalaWelcomeEmail({ userFirstname })),
    from: "Acme <onboarding@resend.dev>",
    subject: "Thank you",
    to: [email],
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}
