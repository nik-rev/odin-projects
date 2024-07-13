import { z } from "zod";

export const MagicLinkSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export type TMagicLinkSchema = z.infer<typeof MagicLinkSchema>;
