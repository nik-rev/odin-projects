"use client";

import { newPassword } from "@/actions/new-password";
import { useSearchParams } from "next/navigation";

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
