import { z } from "zod";

import { EmailSchema } from "./fields";

export const ForgotPasswordSchema = z.object({
  email: EmailSchema,
});

export type TForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
