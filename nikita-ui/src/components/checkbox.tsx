import React, { type ReactNode } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  type CheckboxGroupProps as AriaCheckboxGroupProps,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { DescriptionContext, DescriptionProvider } from "./field";
import { CheckIcon, MinusIcon } from "./icons";
import {
  composeTailwindRenderProps,
  groupBoxStyle,
  groupFocusVisibleOutlineStyle,
} from "./utils";

export type CheckboxGroupProps = {
  children?: ReactNode;
  orientation?: "vertical" | "horizontal";
} & Omit<AriaCheckboxGroupProps, "children">;

export function CheckboxGroup({
  orientation = "vertical",
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      data-orientation={orientation}
      className={composeTailwindRenderProps(props.className, groupBoxStyle)}
    />
  );
}

export function Checkboxes({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        "flex flex-col group-data-[orientation=horizontal]:flex-row group-data-[orientation=horizontal]:flex-wrap",
        "[&_label]:has-[[data-ui=description]]:font-medium",
        className,
      )}
      {...props}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <DescriptionProvider>
      <div
        {...props}
        data-ui="field"
        className={twMerge(
          "group flex flex-col gap-y-1",
          "[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7",
          "[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7",
          "[&_label]:has-[[data-ui=description]]:font-medium",
          "[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50",
          className,
        )}
      />
    </DescriptionProvider>
  );
}

type CheckboxProps = {
  labelPosition?: "left" | "right";
} & AriaCheckboxProps;

export function Checkbox({
  labelPosition = "right",
  children,
  ...props
}: CheckboxProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  return (
    <AriaCheckbox
      {...props}
      aria-describedby={descriptionContext?.["aria-describedby"]}
      data-position={labelPosition}
      className={composeTailwindRenderProps(props.className, [
        "group flex items-center gap-x-3",
        "group-data-[orientation=horizontal]:text-nowrap",
        "data-[position=left]:flex-row-reverse",
        "data-[position=left]:justify-between",
        "text-base/6 sm:text-sm/6",
        "disabled:opacity-50 cursor-pointer disabled:cursor-auto read-only:cursor-auto",
      ])}
    >
      {(renderProps) => (
        <>
          <div
            className={twMerge([
              "flex flex-shrink-0 items-center justify-center",
              "size-[1.125rem] rounded shadow-sm sm:size-4",
              "border border-zinc-400/75",

              "group-invalid:border-destructive",
              "group-invalid:",

              "group-selected:border",
              "group-selected:border-accent",
              "group-selected:bg-accent",
              "group-selected:",
              "group-selected:",
              "group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",

              "group-indeterminate:border",
              "group-indeterminate:border-accent",
              "group-indeterminate:bg-accent",
              "group-indeterminate:",
              "group-indeterminate:",
              "group-indeterminate:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
              groupFocusVisibleOutlineStyle,
            ])}
          >
            {renderProps.isIndeterminate ? (
              <MinusIcon className="size-4 text-white sm:size-3.5" />
            ) : renderProps.isSelected ? (
              <CheckIcon className="size-4 text-white sm:size-3.5" />
            ) : null}
          </div>

          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </AriaCheckbox>
  );
}
