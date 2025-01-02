import { z } from "zod";

import { EmailSchema } from "./fields";

export const MagicLinkSchema = z.object({
  email: EmailSchema,
});

export type TMagicLinkSchema = z.infer<typeof MagicLinkSchema>;
