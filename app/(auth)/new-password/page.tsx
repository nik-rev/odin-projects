"use client";

import { useSearchParams } from "next/navigation";

import { newPassword } from "@/actions/new-password";

export default function NewPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = (formData: FormData) => {
    newPassword(formData, token);
  };

  return (
    <form action={handleSubmit}>
      <input placeholder="*******" name="password" type="password" />
      <button type="submit">Send Me Reset link</button>
    </form>
  );
}
