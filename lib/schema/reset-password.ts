import { z } from "zod";

export const PasswordResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export type TPasswordResetSchema = z.infer<typeof PasswordResetSchema>;
