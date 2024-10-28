import React from "react";
import {
  Popover as AriaPopover,
  PopoverContext,
  type PopoverProps as AriaPopoverProps,
  useSlottedContext,
} from "react-aria-components";

import { composeTailwindRenderProps } from "./utils";

export default {};
export type PopoverProps = {
  children: React.ReactNode;
  noEnteringAnimation?: boolean;
  noExitingAnimation?: boolean;
} & Omit<AriaPopoverProps, "children">;

export function Popover(props: PopoverProps) {
  const { offset, className } = props;

  const popoverContext = useSlottedContext(PopoverContext);

  if (!popoverContext) {
    throw new Error("No popover contex found");
  }

  const isSubmenu = popoverContext.trigger === "SubmenuTrigger";

  const calculatedOffset =
    typeof offset === "number" ? (isSubmenu ? offset - 14 : offset) : undefined;

  return (
    <AriaPopover
      {...props}
      offset={calculatedOffset}
      className={composeTailwindRenderProps(className, [
        "bg-white",
        "",
        "shadow-md",
        "rounded-lg",
        "ring-1",
        "ring-zinc-950/10",
        "",

        "entering:animate-in",
        "entering:ease-out",
        "entering:fade-in",
        "entering:placement-left:slide-in-from-right-1",
        "entering:placement-right:slide-in-from-left-1",
        "entering:placement-top:slide-in-from-bottom-1",
        "entering:placement-bottom:slide-in-from-top-1",
        "entering:duration-50",

        "exiting:animate-out",
        "exiting:ease-in",
        "exiting:fade-out",
        "exiting:placement-left:slide-out-to-right-1",
        "exiting:placement-right:slide-out-to-left-1",
        "exiting:placement-top:slide-out-to-bottom-1",
        "exiting:placement-bottom:slide-out-to-top-1",
        "exiting:duration-50",
      ])}
    />
  );
}
