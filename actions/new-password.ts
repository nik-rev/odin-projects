"use server";

import bcrypt from "bcryptjs";

import { SALT_ROUNDS } from "@/constants";
import type { TNewPasswordSchema } from "@/lib/schema/new-password";
import db from "@/prisma";

export const newPassword = async (
  values: TNewPasswordSchema,
  token: string | null,
) => {
  if (!token) {
    return { error: "Invalid token!" };
  }

  /* add validation to password later */

  const existingToken = await db.passwordResetToken.findUnique({
    where: {
      token,
    },
  });

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await db.user.findUnique({
    where: {
      email: existingToken.email,
    },
  });

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const newEncryptedPassword = await bcrypt.hash(values.password, SALT_ROUNDS);

  await db.user.changePassword(
    existingUser.id,
    existingToken.id,
    newEncryptedPassword,
  );

  return { success: "Password updated!" };
};
