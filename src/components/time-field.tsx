import {
  composeRenderProps,
  TimeField as RACTimeField,
  type TimeFieldProps as RACTimeFieldProps,
  type TimeValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { inputFieldStyle } from "./utils";

export type TimeFieldProps<T extends TimeValue> = {} & RACTimeFieldProps<T>;

export function TimeField<T extends TimeValue>(props: RACTimeFieldProps<T>) {
  const { className } = props;

  return (
    <RACTimeField
      {...props}
      className={composeRenderProps(
        className,
        (renderClassName, { isDisabled }) =>
          twMerge(
            inputFieldStyle,
            "items-start",
            // RAC does not set disable to time field when it is disable
            // So we have to style disable state for none input
            isDisabled && "[&>:not(input)]:opacity-50",
            renderClassName,
          ),
      )}
    />
  );
}
