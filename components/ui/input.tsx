import { Eye, EyeClosed, EyeSlash } from "@phosphor-icons/react";
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
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
