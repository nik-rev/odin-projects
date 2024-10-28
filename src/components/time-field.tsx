import {
  composeRenderProps,
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { inputFieldStyle } from "./utils";

export type TimeFieldProps<T extends TimeValue> = {} & AriaTimeFieldProps<T>;

export function TimeField<T extends TimeValue>(props: AriaTimeFieldProps<T>) {
  const { className } = props;

  return (
    <AriaTimeField
      {...props}
      className={composeRenderProps(
        className,
        (renderClassName, { isDisabled }) =>
          twMerge(
            inputFieldStyle,
            "items-start",
            // Aria does not set disable to time field when it is disable
            // So we have to style disable state for none input
            isDisabled && "[&>:not(input)]:opacity-50",
            renderClassName,
          ),
      )}
    />
  );
}
