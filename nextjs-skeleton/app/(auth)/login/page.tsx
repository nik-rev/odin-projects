"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { loginCredentials } from "@/actions/login";
import FormError from "@/components/form-error";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { useIsClient } from "@/hooks/use-is-client";
import type { TLoginSchema } from "@/lib/schema/login";
import { LoginSchema } from "@/lib/schema/login";

export default function Login() {
  const [error, setError] = useState("");
  const isClient = useIsClient();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: TLoginSchema) => {
    startTransition(() => {
      loginCredentials(values).then((data) => {
        if (data?.error) {
          setError(data.error);
        }
      });
    });
    form.reset();
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
        <FormError>{error}</FormError>
        <Button type="submit" disabled={isPending}>
          Login
        </Button>
      </form>
    </Form>
  );
}
