import React from "react";
import {
  FieldError as RACFieldError,
  type FieldErrorProps,
  GroupContext,
  Input as RACInput,
  type InputProps,
  Label as RACLabel,
  LabelContext,
  type LabelProps,
  Text as RACText,
  TextArea as RACTextArea,
  type TextAreaProps as RACTextAreaProps,
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  type TextProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Text } from "./text";
import {
  composeTailwindRenderProps,
  type DisplayLevel,
  displayLevels,
  focusRingStyle,
  inputFieldStyle,
} from "./utils";

// https://react-spectrum.adobe.com/react-aria/Group.html#advanced-customization
export function LabeledGroup({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const labelId = React.useId();

  return (
    <LabelContext.Provider value={{ id: labelId, elementType: "span" }}>
      <GroupContext.Provider value={{ "aria-labelledby": labelId }}>
        <div
          className={twMerge(
            ["[&>[data-ui=label]:first-of-type:not([class*=mb])]:mb-2"],
            className,
          )}
        >
          {children}
        </div>
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

export function Label({
  requiredHint,
  displayLevel = 3,
  ...props
}: LabelProps & {
  requiredHint?: boolean;
  displayLevel?: DisplayLevel;
}) {
  return (
    <RACLabel
      {...props}
      data-ui="label"
      className={twMerge(
        "inline-block min-w-max text-pretty",
        "group-disabled:opacity-50",
        displayLevels[displayLevel],
        requiredHint &&
          "after:ms-0.5 after:text-destructive after:content-['*']",
        props.className,
      )}
    />
  );
}

export const DescriptionContext = React.createContext<{
  "aria-describedby"?: string;
} | null>(null);

export function DescriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const descriptionId: string | null = React.useId();
  const [isDescriptionRendered, setIsDescriptionRendered] =
    React.useState(true);

  React.useLayoutEffect(() => {
    if (!document.getElementById(descriptionId)) {
      setIsDescriptionRendered(false);
    }
  }, [descriptionId]);

  return (
    <DescriptionContext.Provider
      value={{
        "aria-describedby": isDescriptionRendered ? descriptionId : undefined,
      }}
    >
      {children}
    </DescriptionContext.Provider>
  );
}

/**
 * RAC will auto associate <RACText slot="description"/> with TextField/NumberField/RadioGroup/CheckboxGroup/DatePicker etc,
 * but not for Switch/Checkbox/Radio and our custom components. We use follow pattern to associate description for
 * Switch/Checkbox/Radio https://react-spectrum.adobe.com/react-aria/Switch.html#advanced-customization
 */
export function Description({ className, ...props }: TextProps) {
  const describedby =
    React.useContext(DescriptionContext)?.["aria-describedby"];

  return describedby ? (
    <Text
      {...props}
      id={describedby}
      data-ui="description"
      className={twMerge("block group-disabled:opacity-50", className)}
    />
  ) : (
    <RACText
      {...props}
      data-ui="description"
      slot="description"
      className={twMerge(
        "block text-pretty text-base/6 text-muted sm:text-sm/6",
        "group-disabled:opacity-50",
        className,
      )}
    />
  );
}

export function TextField(props: RACTextFieldProps) {
  const { className } = props;

  return (
    <RACTextField
      {...props}
      data-ui="text-field"
      className={composeTailwindRenderProps(className, inputFieldStyle)}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  const { className } = props;

  return (
    <RACFieldError
      {...props}
      data-ui="errorMessage"
      className={composeTailwindRenderProps(
        className,
        "block text-base/6 text-destructive sm:text-sm/6",
      )}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <RACInput
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(props.className, [
        "w-full rounded-lg border bg-inherit shadow-sm outline-none",
        "px-2.5 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
        "text-base/6 placeholder:text-muted sm:text-sm/6",
        "invalid:border-destructive",
        "disabled:opacity-50",
        focusRingStyle,
      ])}
    />
  ),
);

Input.displayName = "Input";

export function TextArea(props: RACTextAreaProps) {
  const { className } = props;

  return (
    <RACTextArea
      {...props}
      className={composeTailwindRenderProps(className, [
        "w-full rounded-lg border bg-inherit px-2.5 py-1 outline-none",
        "text-base/6 placeholder:text-muted sm:text-sm/6 ",
        "disabled:opacity-50",
        "invalid:border-destructive",
        focusRingStyle,
      ])}
    />
  );
}
