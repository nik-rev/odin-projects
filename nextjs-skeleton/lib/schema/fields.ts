import { z } from "zod";

import { PASSWORD_MIN_LENGTH, REQUIRED_FIELD_MESSAGE } from "@/constants";

export const PasswordSchema = z
  .string()
  .min(1, {
    message: REQUIRED_FIELD_MESSAGE,
  })
  .min(PASSWORD_MIN_LENGTH, {
    message: `Password must contain at least ${PASSWORD_MIN_LENGTH} characters`,
  });

export const EmailSchema = z
  .string()
  .min(1, {
    message: REQUIRED_FIELD_MESSAGE,
  })
  .email({ message: "Please enter a valid email address" });
