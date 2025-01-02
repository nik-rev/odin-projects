// https://www.jacobparis.com/content/react-as-child
import React from "react";
import { twMerge } from "tailwind-merge";

export default {};
export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

export function Slot({
  children,
  asChild: _asChild,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  asChild?: boolean;
}) {
  if (React.isValidElement(children)) {
    /* eslint @typescript-eslint/no-unsafe-assignment: off, @typescript-eslint/no-unsafe-member-access: off, @typescript-eslint/no-unsafe-argument: off 
     -- children must have className */
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: twMerge(props.className, children.props.className),
    });
  }
  if (React.Children.count(children) > 1) {
    React.Children.only(null);
  }
  return null;
}
