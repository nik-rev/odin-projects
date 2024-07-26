import { z } from "zod";

import { EmailSchema, PasswordSchema } from "./fields";

export const LoginSchema = z.object({
  password: PasswordSchema,
  email: EmailSchema,
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
