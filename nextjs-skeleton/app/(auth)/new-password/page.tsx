"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { newPassword } from "@/actions/new-password";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/input";
import { useIsClient } from "@/hooks/use-is-client";
import type { TNewPasswordSchema } from "@/lib/schema/new-password";
import { NewPasswordSchema } from "@/lib/schema/new-password";

export default function NewPassword() {
  const isClient = useIsClient();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<TNewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleSubmit = (values: TNewPasswordSchema) => {
    startTransition(() => {
      newPassword(values, token).then((data) => {
        if (data.error) {
          setError(data.error);
        }
        if (data.success) {
          setSuccess(data.success);
        }
      });
    });
    form.reset();
    setSuccess("");
    setError("");
  };

  if (!isClient) {
    return <CircleNotch className="animate-spin" />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  {...field}
                  disabled={isPending}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSuccess>{success}</FormSuccess>
        <FormError>{error}</FormError>
        <Button type="submit" disabled={isPending}>
          Reset
        </Button>
      </form>
    </Form>
  );
}
