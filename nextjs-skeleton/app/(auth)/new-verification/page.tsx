"use client";

import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { newVerification } from "@/actions/new-verification";
import FormSuccess from "@/components/form-success";
import FormError from "@/components/form-success";

export default function NewVerification() {
  const [error, setError] = useState<undefined | string>();
  const [success, setSuccess] = useState<undefined | string>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (success || error) {
      return;
    }

    if (!token) {
      setError("Missing token!");
      return;
    }

    try {
      const verification = await newVerification(token);
      setError(verification.success);
      setSuccess(verification.error);
    } catch {
      setError("Something went wrong!");
    }
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex w-full items-center justify-center">
      {!success && !error && <LoaderCircle className="animate-spin" />}
      {!success && <FormError>{error}</FormError>}
      {success && <FormSuccess>{success}</FormSuccess>}
    </div>
  );
}
