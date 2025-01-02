"use server";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import type { TLoginSchema } from "@/lib/schema/login";

export const loginCredentials = async (values: TLoginSchema) => {
  // const rawFormData = {
  //   password: formData.get("password"),
  //   email: formData.get("email"),
  //   redirectTo: "/",
  //   role: "USER",
  // };

  try {
    await signIn("credentials", values);
  } catch (error) {
    if (error instanceof AuthError) {
      return error.type === "CredentialsSignin"
        ? { error: "Invalid credentials" }
        : { error: "Something went wrong" };
    }

    throw error;
  }
  revalidatePath("/");
};
