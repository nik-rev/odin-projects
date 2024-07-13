import { z } from "zod";

export const RegisterSchema = z
  .object({
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password" }),
    password: z
      .string()
      .min(6, { message: "Minimum of 6 characters required" }),
    email: z.string().email(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
