"use client";

import { TSignupSchema, signupSchema } from "@/lib/schema/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    register,
    setError,
    reset,
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: TSignupSchema) => {
    const response = await fetch("/api/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          message: errors.email,
          type: "server",
        });
      } else if (errors.password) {
        setError("password", {
          message: errors.password,
          type: "server",
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          message: errors.confirmPassword,
          type: "server",
        });
      } else {
        alert("Something went wrong!");
      }
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        {...register("email", { required: true })}
        aria-invalid={errors.email ? "true" : "false"}
        placeholder="Email"
        type="email"
        id="email"
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <label htmlFor="password">Password</label>
      <input
        {...register("password", { required: true })}
        aria-invalid={errors.password ? "true" : "false"}
        placeholder="Password"
        type="password"
        id="password"
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        {...register("confirmPassword", { required: true })}
        aria-invalid={errors.confirmPassword ? "true" : "false"}
        placeholder="Confirm password"
        id="confirmPassword"
        type="password"
      />
      {errors.confirmPassword && (
        <p role="alert">{errors.confirmPassword.message}</p>
      )}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}
