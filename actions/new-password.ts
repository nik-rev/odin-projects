"use server";

import { encryptPassword } from "@/lib/util/encrypt-password";
import db from "@/prisma";

export const newPassword = async (formData: FormData, token: string | null) => {
  if (!token) {
    throw new Error("Invalid token!");
  }

  const password = formData.get("password");

  /* add validation to password later */

  if (!password || typeof password !== "string") {
    throw new Error("Invalid password!");
  }

  const existingToken = await db.passwordResetToken.findUnique({
    where: {
      token,
    },
  });

  if (!existingToken) {
    throw new Error("Invalid token!");
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    throw new Error("Token has expired!");
  }

  const existingUser = await db.user.findUnique({
    where: {
      email: existingToken.email,
    },
  });

  if (!existingUser) {
    throw new Error("Email does not exist!");
  }

  const newEncryptedPassword = await encryptPassword(password);

  await db.user.changePassword(
    existingUser.id,
    existingToken.id,
    newEncryptedPassword,
  );

  return { success: "Password updated!" };
};
