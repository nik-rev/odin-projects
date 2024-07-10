import { saltAndHashPassword } from "@/lib/util/salt-and-hash-password";
import { signupSchema } from "@/lib/schema/signup";
import { NextResponse } from "next/server";
import db from "@/prisma";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = signupSchema.safeParse(body);

  let zodErrors = {};
  if (result.success) {
    const hashedPassword = await saltAndHashPassword(result.data.password);

    await db.user.create({
      data: {
        email: result.data.email,
        password: hashedPassword,
      },
    });
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
