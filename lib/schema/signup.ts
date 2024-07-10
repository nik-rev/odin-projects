import { z } from "zod";

export const signupSchema = z
  .object({
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
    email: z.string().email(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignupSchema = z.infer<typeof signupSchema>;
