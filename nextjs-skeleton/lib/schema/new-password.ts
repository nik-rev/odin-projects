import { z } from "zod";

import { PasswordSchema } from "./fields";

export const NewPasswordSchema = z.object({
  password: PasswordSchema,
});

export type TNewPasswordSchema = z.infer<typeof NewPasswordSchema>;
