import {
  composeRenderProps,
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  type DateInputProps as AriaDateInputProps,
  DateSegment,
  type DateValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import {
  composeTailwindRenderProps,
  focusWithinRingStyle,
  inputFieldStyle,
} from "./utils";

export type DateFieldProps<T extends DateValue> = {} & AriaDateFieldProps<T>;

export function DateField<T extends DateValue>(props: DateFieldProps<T>) {
  const { className } = props;

  return (
    <AriaDateField
      {...props}
      className={composeRenderProps(
        className,
        (renderClassName, { isDisabled }) =>
          twMerge(
            inputFieldStyle,
            // Aria does not set disable to date field when it is disable
            // So we have to style disable state for none input
            isDisabled && "[&>:not(input)]:opacity-50",
            renderClassName,
          ),
      )}
    />
  );
}

export type DateInputProps = Omit<AriaDateInputProps, "children">;

export function DateInput(props: DateInputProps) {
  const { className } = props;

  return (
    <AriaDateInput
      {...props}
      data-ui="control"
      className={composeTailwindRenderProps(className, [
        "group flex w-full items-center rounded-lg border bg-inherit shadow-sm",
        "invalid:border-destructive",
        "[&:has([data-disabled=true])]:opacity-50",
        focusWithinRingStyle,
        "ring-offset-0",
        "block min-w-[150px]",
        "text-base/6 sm:text-sm/6",
        "px-2.5",
        "py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
      ])}
    >
      {(segment) => (
        <DateSegment
          segment={segment}
          className={twMerge(
            "inline rounded px-0.5 caret-transparent outline-0 type-literal:px-0",
            "data-[placeholder]:italic data-[placeholder]:text-muted",
            "focus:bg-accent focus:text-white focus:data-[placeholder]:text-white",
          )}
        />
      )}
    </AriaDateInput>
  );
}
