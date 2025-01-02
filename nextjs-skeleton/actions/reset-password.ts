"use server";

import type { TForgotPasswordSchema } from "@/lib/schema/forgot-password";
import { sendPasswordResetEmail } from "@/lib/util/send-email";
import { generatePasswordResetToken } from "@/lib/util/verification-token";
import db from "@/prisma";

export const resetPassword = async (formData: TForgotPasswordSchema) => {
  const existingUser = await db.user.findUnique({
    where: {
      email: formData.email,
    },
  });

  if (!existingUser) {
    return { error: "This email does not exist" };
  }

  const passwordResetToken = await generatePasswordResetToken(formData.email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Reset email sent!" };
};
