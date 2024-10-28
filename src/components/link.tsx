import React from "react";
import {
  Link as RACLink,
  type LinkProps as RACLinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { type AsChildProps, Slot } from "./slot";
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from "./utils";

export default {};
export type LinkProps = AsChildProps<RACLinkProps>;

const linkStyle = [
  "relative inline-flex cursor-pointer items-center gap-1 rounded-lg outline-none hover:underline",
  "text-base/6 sm:text-sm/6",
  "disabled:no-underline disabled:opacity-50 disabled:cursor-default",
  "[&.border]:hover:no-underline",
].join(" ");

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { asChild: isAsChild, ...rest } = props;

    if (isAsChild) {
      return <Slot className={twMerge(linkStyle)}>{props.children}</Slot>;
    }

    return (
      <RACLink
        {...rest}
        ref={ref}
        className={composeTailwindRenderProps(props.className, [
          linkStyle,
          focusVisibleOutlineStyle,
        ])}
      />
    );
  },
);

Link.displayName = "Link";
