"use server";

import { getVerificationTokenByToken } from "@/lib/util/verification-token";
import db from "@/prisma";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
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

  await db.user.update({
    data: {
      email: existingToken.email,
      emailVerified: new Date(),
    },
    where: { id: existingUser.id },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified!" };
};
