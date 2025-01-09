import React from "react";
import { type LinkProps, type TextProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Link } from "./link";
import { composeTailwindRenderProps } from "./utils";

export function Text({
  className,
  elementType,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    elementType ?? "p",
    {
      ...props,
      className: twMerge(
        "text-pretty text-base/6 text-muted sm:text-sm/6",
        className,
      ),
    },
    children,
  );
}

export function Strong({
  className,
  ...props
}: React.JSX.IntrinsicElements["strong"]) {
  return (
    <Text
      {...props}
      elementType="strong"
      className={twMerge("font-medium text-foreground", className)}
    />
  );
}

export function Small({
  className,
  ...props
}: React.JSX.IntrinsicElements["small"]) {
  return (
    <Text
      {...props}
      elementType="small"
      className={twMerge("text-sm sm:text-xs", className)}
    />
  );
}

export function TextLink(props: LinkProps) {
  const { className } = props;

  return (
    <Link
      {...props}
      className={composeTailwindRenderProps(
        className,
        "underline underline-offset-4",
      )}
    />
  );
}
