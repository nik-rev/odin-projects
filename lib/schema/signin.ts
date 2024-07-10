import { z } from "zod";

export const signinSchema = z.object({
  password: z.string().min(10, "Password must be at least 10 characters"),
  email: z.string().email(),
});

export type TSigninSchema = z.infer<typeof signinSchema>;
