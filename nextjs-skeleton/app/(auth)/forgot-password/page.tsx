"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { resetPassword } from "@/actions/reset-password";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useIsClient } from "@/hooks/use-is-client";
import type { TForgotPasswordSchema } from "@/lib/schema/forgot-password";
import { ForgotPasswordSchema } from "@/lib/schema/forgot-password";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-error";

export default function ForgotPassword() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const isClient = useIsClient();

  const form = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: TForgotPasswordSchema) => {
    startTransition(() => {
      resetPassword(values).then((data) => {
        if (data.success) {
          setSuccess(data.success);
        }
        if (data.error) {
          setError(data.error);
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError>{error}</FormError>
        <FormSuccess>{success}</FormSuccess>
        <Button type="submit" disabled={isPending}>
          Reset
        </Button>
      </form>
    </Form>
  );
}
