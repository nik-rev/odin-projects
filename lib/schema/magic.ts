import { z } from "zod";

export const magicSchema = z.object({
  email: z.string().email(),
});

export type TMagicSchema = z.infer<typeof magicSchema>;
