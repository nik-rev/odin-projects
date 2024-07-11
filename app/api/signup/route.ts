import { generateVerificationToken } from "@/lib/util/verification-token";
import { saltAndHashPassword } from "@/lib/util/salt-and-hash-password";
import { sendVerificationEmail } from "@/lib/util/send-email";
import { signupSchema } from "@/lib/schema/signup";
import { NextResponse } from "next/server";
import db from "@/prisma";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = signupSchema.safeParse(body);

  let zodErrors = {};
  if (result.success) {
    const password = await saltAndHashPassword(result.data.password);
    const email = result.data.email;

    await db.user.create({
      data: {
        password,
        email,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );
  } else {
    for (const issue of result.error.issues) {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    }
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true },
  );
}
