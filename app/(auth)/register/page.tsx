"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { register } from "@/actions/register";
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
import { useToggle } from "@/hooks/use-toggle";
import type { TRegisterSchema } from "@/lib/schema/register";
import { RegisterSchema } from "@/lib/schema/register";
import { cn } from "@/lib/utils";

export default function Register() {
  const [isFocused, toggleFocused] = useToggle(false);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const isClient = useIsClient();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchPassword = form.watch("password");
  useEffect(() => {
    if (watchPassword && hasSubmittedForm) {
      form.trigger("confirmPassword");
    }
  }, [watchPassword, form, hasSubmittedForm]);

  const handleSubmit = (values: TRegisterSchema) => {
    startTransition(() => {
      /* eslint promise/prefer-await-to-then: "off", promise/catch-or-return: "off", @typescript-eslint/no-floating-promises: "off", promise/always-return: "off" -- startTransition function cannot take an async callback */
      register(values).then((data) => {
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
                <Input {...field} disabled={isPending} type="email" required />
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
                  onFocus={toggleFocused}
                  onBlur={toggleFocused}
                />
              </FormControl>
              <FormMessage>
                <p className={cn({ invisible: !isFocused })}>
                  Password must contain at least 8 characters
                </p>
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <PasswordInput {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
              <Button variant="link" asChild>
                <Link href="/forgot-password">Forgot password?</Link>
              </Button>
            </FormItem>
          )}
        />
        {error}
        {success}
        <Button
          type="submit"
          onClick={() => setHasSubmittedForm(true)}
          disabled={isPending}
        >
          Create account
        </Button>
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 underline">
          Sign in
        </Link>
      </form>
    </Form>
  );
}
