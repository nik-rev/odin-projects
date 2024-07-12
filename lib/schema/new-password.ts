import { z } from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export type TNewPasswordSchema = z.infer<typeof newPasswordSchema>;
