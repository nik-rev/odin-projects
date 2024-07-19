import { HOUR } from "@/constants";
import db from "@/prisma";
import { randomUUID } from "node:crypto";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    return await db.verificationToken.findUniqueOrThrow({
      where: { token },
    });
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    return await db.verificationToken.findFirstOrThrow({
      where: { email },
    });
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    return await db.passwordResetToken.findFirstOrThrow({
      where: { email },
    });
  } catch {
    return null;
  }
};

export const generateVerificationToken = async (email: string) => {
  const token = randomUUID();
  const expires = new Date(Date.now() + HOUR);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  return await db.verificationToken.create({
    data: {
      expires,
      email,
      token,
    },
  });
};

export const generatePasswordResetToken = async (email: string) => {
  const token = randomUUID();
  const expires = new Date(Date.now() + HOUR);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  return await db.passwordResetToken.create({
    data: {
      expires,
      email,
      token,
    },
  });
};
