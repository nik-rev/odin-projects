import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  type LinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { ChevronRightIcon } from "./icons";
import { Link } from "./link";
import { composeTailwindRenderProps } from "./utils";

export function Breadcrumbs<T extends object>({
  className,
  ...props
}: AriaBreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs {...props} className={twMerge("flex gap-1", className)} />
  );
}

type BreadcrumbProps = AriaBreadcrumbProps & LinkProps;

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={composeTailwindRenderProps(
        className as AriaBreadcrumbProps["className"],
        "flex items-center gap-1",
      )}
    >
      <Link
        {...props}
        className="underline underline-offset-2 disabled:opacity-100 [&:not(:hover)]:decoration-muted"
      />
      {props.href && (
        <ChevronRightIcon className="size-4 text-muted" strokeWidth={1.5} />
      )}
    </AriaBreadcrumb>
  );
}
