import React from "react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
  type RadioRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { DescriptionContext, DescriptionProvider } from "./field";
import {
  composeTailwindRenderProps,
  groupBoxStyle,
  groupFocusVisibleOutlineStyle,
} from "./utils";

export default {};
export function RadioGroup({ ...props }: AriaRadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={composeTailwindRenderProps(props.className, groupBoxStyle)}
    />
  );
}

export function Radios({
  className,
  ...props
}: React.JSX.IntrinsicElements["div"]) {
  return (
    <div
      data-ui="box"
      className={twMerge(
        "flex",
        "flex-col",
        "group-aria-[orientation=horizontal]:flex-row",
        "group-aria-[orientation=horizontal]:flex-wrap",
        // When any radio item has description, apply all `font-medium` to all radio item labels
        "[&_label]:has-[[data-ui=description]]:font-medium",
        className,
      )}
      {...props}
    />
  );
}

export function RadioField({
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
          "[&_label]:has-[[data-position=left]]:justify-between",
          "[&_[data-ui=description]:not([class*=pe-])]:has-[label[data-position=left]]:pe-7",
          "[&_[data-ui=description]:not([class*=ps-])]:has-[label[data-position=right]]:ps-7",
          "[&_[data-ui=description]]:has-[label[data-disabled]]:opacity-50",
          // cursor
          "cursor-pointer [&_[data-ui=description]]:has-[label[data-disabled]]:cursor-auto",
          className,
        )}
      />
    </DescriptionProvider>
  );
}

export type RadioProps = {
  labelPosition?: "left" | "right";
  render?: never;
} & AriaRadioProps;

export type CustomRenderRadioProps = {
  render: (props: RadioRenderProps) => React.ReactNode;
  children?: never;
} & Omit<AriaRadioProps, "children">;

export function Radio({
  className,
  ...props
}: RadioProps | CustomRenderRadioProps) {
  const descriptionContext = React.useContext(DescriptionContext);

  if (props.render) {
    return (
      <AriaRadio
        {...props}
        aria-describedby={descriptionContext?.["aria-describedby"]}
        className={composeTailwindRenderProps(className, [
          "text-base/6 sm:text-sm/6",
          "disabled:opacity-50 cursor-pointer disabled:cursor-auto",
        ])}
      >
        {props.render}
      </AriaRadio>
    );
  }

  const { labelPosition = "right", ...restProps } = props;

  return (
    <AriaRadio
      {...restProps}
      aria-describedby={descriptionContext?.["aria-describedby"]}
      data-position={labelPosition}
      className={composeTailwindRenderProps(className, [
        "group flex items-center gap-x-3",
        "group-aria-[orientation=horizontal]:text-nowrap",
        "data-[position=left]:flex-row-reverse",
        "data-[position=left]:justify-between",
        "text-base/6 sm:text-sm/6",
        "disabled:opacity-50 cursor-pointer disabled:cursor-auto",
      ])}
    >
      {(renderProps) => (
        <>
          <div
            slot="radio"
            className={twMerge(
              "grid size-[1.0625rem] shrink-0 place-content-center rounded-full shadow-sm",
              "border",
              "border-zinc-400/75",
              "",
              "group-invalid:border-destructive",
              "group-invalid:",
              "group-selected:",
              "group-selected:border-accent",
              "group-selected:bg-accent",
              "group-selected:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
              groupFocusVisibleOutlineStyle,
            )}
          >
            <div className="rounded-full group-selected:size-1.5 group-selected:bg-white" />
          </div>

          {typeof props.children === "function"
            ? props.children(renderProps)
            : props.children}
        </>
      )}
    </AriaRadio>
  );
}
