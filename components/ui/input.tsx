import { Eye, EyeClosed } from "@phosphor-icons/react";
import * as React from "react";

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";

import { Button } from "./button";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, type, ...props }, ref) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function PasswordInput({ ...props }, ref) {
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} ref={ref} {...props} />
      <Button
        type="button"
        variant="ghost"
        tabIndex={-1}
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={toggleShowPassword}
      >
        {showPassword ? (
          <EyeClosed weight="regular" alt="Hide password" size={20} />
        ) : (
          <Eye weight="regular" alt="Show password" size={20} />
        )}
      </Button>
    </div>
  );
});

export { Input, PasswordInput };
