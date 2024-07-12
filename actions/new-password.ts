"use server";

import { encryptPassword } from "@/lib/util/salt-and-hash-password";
import db from "@/prisma";

const changePassword = async (
  userId: string,
  tokenId: string,
  newPassword: string,
) => {
  const [user, deletedToken] = await db.$transaction([
    db.user.update({
      data: { password: newPassword },
      where: { id: userId },
    }),
    db.passwordResetToken.delete({
      where: { id: tokenId },
    }),
  ]);

  return [user, deletedToken];
};

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

  const newPassword = await encryptPassword(password);

  await changePassword(existingUser.id, existingToken.id, newPassword);

  return { success: "Password updated!" };
};
