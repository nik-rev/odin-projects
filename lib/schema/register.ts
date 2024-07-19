import { z } from "zod";

import { PASSWORD_MIN_LENGTH } from "@/constants";

const passwordValidation = z.string().min(PASSWORD_MIN_LENGTH, {
  message: `Password must contain at least ${PASSWORD_MIN_LENGTH} characters`,
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
