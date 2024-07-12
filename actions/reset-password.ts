"use server";

import { sendPasswordResetEmail } from "@/lib/util/send-email";
import { generatePasswordResetToken } from "@/lib/util/verification-token";
import db from "@/prisma";

export const resetPassword = async (formData: FormData) => {
  const email = formData.get("email");
  if (!email || typeof email !== "string") {
    throw new Error("Invalid email!");
  }

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    throw new Error("This email does not exist!");
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Reset email sent!" };
};
