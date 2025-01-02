"use server";
import bcrypt from "bcryptjs";

import { SALT_ROUNDS } from "@/constants";
import type { TRegisterSchema } from "@/lib/schema/register";
import { RegisterSchema } from "@/lib/schema/register";
import { sendVerificationEmail } from "@/lib/util/send-email";
import { generateVerificationToken } from "@/lib/util/verification-token";
import db from "@/prisma";

export const register = async (data: TRegisterSchema) => {
  const validatedFields = RegisterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { password, email } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "User email already exists." };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Successfully registered. Verify your email!" };
};
