import React from "react";
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  ComboBoxStateContext,
  Group,
  type GroupProps,
  Keyboard,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button, type ButtonWithoutAsChildProps } from "./button";
import { ChevronDownIcon, XIcon } from "./icons";
import { composeTailwindRenderProps, inputFieldStyle } from "./utils";

export function ComboBox(props: AriaComboBoxProps<object>) {
  const { className } = props;

  return (
    <AriaComboBox
      {...props}
      data-ui="comboBox"
      className={composeTailwindRenderProps(className, [
        "w-full min-w-56",
        inputFieldStyle,
      ])}
    />
  );
}

export function ComboBoxGroup(props: GroupProps) {
  const { className } = props;

  return (
    <Group
      data-ui="control"
      {...props}
      className={composeTailwindRenderProps(className, [
        "isolate",
        "grid",
        "grid-cols-[36px_1fr_minmax(40px,max-content)_minmax(40px,max-content)]",
        "sm:grid-cols-[36px_1fr_minmax(36px,max-content)_minmax(36px,max-content)]",
        "items-center",

        // Icon
        "sm:[&>[data-ui=icon]:has(+input)]:size-4",
        "[&>[data-ui=icon]:has(+input)]:size-5",
        "[&>[data-ui=icon]:has(+input)]:row-start-1",
        "[&>[data-ui=icon]:has(+input)]:col-start-1",
        "[&>[data-ui=icon]:has(+input)]:place-self-center",
        "[&>[data-ui=icon]:has(+input)]:text-muted",
        "[&>[data-ui=icon]:has(+input)]:z-10",

        // Input
        "[&>input]:row-start-1",
        "[&>input]:col-span-full",
        "[&>input:not([class*=pe-])]:pe-10",
        "sm:[&>input:not([class*=pe-])]:pe-9",

        "[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-20",
        "sm:[&>input:has(+[data-ui=clear]:not(:last-of-type))]:pe-16",

        "[&:has([data-ui=icon]+input)>input]:ps-10",
        "sm:[&:has([data-ui=icon]+input)>input]:ps-8",

        // Trigger button
        "[&>[data-ui=trigger]]:row-start-1",
        "[&>[data-ui=trigger]]:-col-end-1",
        "[&>[data-ui=trigger]]:place-self-center",

        // Clear button
        "[&>[data-ui=clear]]:row-start-1",
        "[&>[data-ui=clear]]:-col-end-2",
        "[&>[data-ui=clear]]:justify-self-end",
        "[&>[data-ui=clear]:last-of-type]:-col-end-1",
        "[&>[data-ui=clear]:last-of-type]:place-self-center",
      ])}
    />
  );
}

export function ComboBoxButton() {
  return (
    <Button isIconOnly size="sm" data-ui="trigger" variant="plain">
      <ChevronDownIcon className="text-muted group-hover:text-foreground sm:size-5" />
    </Button>
  );
}

export function ComboBoxClearButton({
  onPress,
}: {
  onPress?: ButtonWithoutAsChildProps["onPress"];
}) {
  const state = React.useContext(ComboBoxStateContext);

  return (
    <Button
      className={twMerge(
        "[&:not(:last-child)]:-me-1",
        state.inputValue
          ? "visible focus-visible:-outline-offset-2"
          : "invisible",
      )}
      slot={null}
      data-ui="clear"
      size="sm"
      isIconOnly
      variant="plain"
      onPress={(e) => {
        state.setSelectedKey(null);
        onPress?.(e);
      }}
    >
      <XIcon aria-label="Clear" className="text-muted" />
    </Button>
  );
}

export function CommandButton() {
  return (
    <>
      <Button
        variant="outline"
        data-ui="trigger"
        size="sm"
        className="me-1 flex font-normal peer-data-[focused=true]:hidden"
      >
        <Keyboard className="font-sans">⌘K</Keyboard>
      </Button>

      <Keyboard
        data-ui="trigger"
        className="me-1 hidden rounded-lg p-1 text-xs peer-data-[focused=true]:flex ltr:ms-1"
      >
        ESC
      </Keyboard>
    </>
  );
}

export { Input as ComboBoxInput } from "./field";
export {
  SelectListBox as ComboBoxListBox,
  SelectListItem as ComboBoxListItem,
  SelectListItemDescription as ComboBoxListItemDescription,
  SelectListItemLabel as ComboBoxListItemLabel,
  SelectPopover as ComboBoxPopover,
  SelectSection as ComboBoxSection,
} from "./select";
