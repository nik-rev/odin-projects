import { z } from "zod";

import { EmailSchema, PasswordSchema } from "./fields";

export const RegisterSchema = z
  .object({
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: PasswordSchema,
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
