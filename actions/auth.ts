"use server";

import { revalidatePath } from "next/cache";
import { signOut, signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const loginWithCredentials = async (formData: FormData) => {
  const rawFormData = {
    password: formData.get("password"),
    email: formData.get("email"),
    redirectTo: "/",
    role: "USER",
  };

  try {
    await signIn("credentials", rawFormData);
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      return error.type === "CredentialsSignin"
        ? { error: "Invalid credentials" }
        : { error: "Something went wrong " };
    }

    throw error;
  }
  revalidatePath("/");
};
