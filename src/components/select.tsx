import {
  Button,
  Collection,
  composeRenderProps,
  Header,
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps,
  Section,
  type SectionProps as AriaSectionProps,
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  SelectValue,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { CheckIcon } from "./icons";
import { ListBox, type ListBoxProps } from "./list-box";
import { Popover, type PopoverProps } from "./popover";
import { Small } from "./text";
import {
  composeTailwindRenderProps,
  focusVisibleRingStyle,
  inputFieldStyle,
  selectBoxIndicator,
} from "./utils";

export default {};
export function Select<T extends object>(props: AriaSelectProps<T>) {
  const { className } = props;

  return (
    <AriaSelect
      {...props}
      data-ui="select"
      className={composeTailwindRenderProps(className, [
        "w-full min-w-56",
        inputFieldStyle,
      ])}
    />
  );
}

export function SelectButton(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { className, children } = props;

  return (
    <Button
      data-ui="control"
      className={composeTailwindRenderProps(className, [
        "relative flex w-full cursor-default text-start items-center gap-x-1 rounded-lg border shadow-sm outline-none transition",
        "pe-8 ps-2.5",
        "py-[calc(theme(spacing[2.5])-1px)]",
        " sm:py-[calc(theme(spacing[1.5])-1px)]",
        "group-invalid:border-destructive",
        "group:disabled:cursor-not-allowed group-disabled:opacity-50",
        "text-base/6 sm:text-sm/6",
        "[&>*:has(+[data-ui=select-value])>svg]:size-4",
        "[&>*:has(+[data-ui=select-value])>svg]:text-muted",
        focusVisibleRingStyle,
        "focus-visible:ring-offset-0",
        selectBoxIndicator,
      ])}
    >
      {Boolean(children) && (
        <span className="flex items-center gap-x-2">{children}</span>
      )}
      <SelectValue
        data-ui="select-value"
        className={twMerge([
          "flex-1 truncate  data-[placeholder]:text-muted",
          // Selected Item style
          "[&>[data-ui=item]]:flex",
          "[&>[data-ui=item]]:items-center",
          "[&>[data-ui=item]]:gap-x-2",
          "[&>[data-ui=item]_[data-ui=description]]:sr-only",
          "[&>[data-ui=item]_[data-ui=icon]:not([class*=size-])]:size-5",
          "[&>[data-ui=item]_[role=img]]:size-6",
          "sm:[&>[data-ui=item]_[data-ui=icon]:not([class*=size-])]:size-4",
          "sm:[&>[data-ui=item]_[role=img]]:size-5",
        ])}
      />
    </Button>
  );
}

export function SelectPopover({
  className,
  placement = "bottom",
  ...props
}: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(className, [
        "w-[--trigger-width]",
        "",
        "",
      ])}
      placement={placement}
    />
  );
}

export function SelectListBox<T extends object>(props: ListBoxProps<T>) {
  const { className } = props;

  return (
    <ListBox
      {...props}
      className={composeTailwindRenderProps(className, [
        "flex max-h-[inherit] flex-col overflow-auto p-1 has-[header]:px-2 has-[header]:pt-0",

        // Listbox item
        "[&_[data-ui=item]]:grid",
        "[&_[data-ui=item]]:grid-cols-[minmax(16px,max-content)_1fr]",
        "[&_[data-ui=item]]:items-center",
        "[&_[data-ui=item]]:gap-x-2",

        // icon
        "[&_[data-ui=item]>[data-ui=icon]:has(+[data-ui=label]):not([class*=size-])]:size-4",

        // icon + label
        "[&_[data-ui=item]>[data-ui=label]]:col-span-full",
        // label
        "[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2",

        // icon + label + description
        // description
        "[&:has([data-ui=icon]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2",

        // image
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label])]:size-5",

        // label
        "[&:has([role=img]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2",

        // Image + label + description
        // Image
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:size-7",
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:self-start",
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:mt-0.5",
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:row-start-1",
        "[&_[data-ui=item]>[role=img]:has(+[data-ui=label]+[data-ui=description])]:row-end-3",

        // label
        "[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=label]]:leading-5",

        // description
        "[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-row-2",
        "[&:has([role=img]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2",
      ])}
    />
  );
}

export type SectionProps<T> = {
  title?: string;
} & AriaSectionProps<T>;

export function SelectSection<T extends object>(props: SectionProps<T>) {
  const { className, title, items, children } = props;

  return (
    <Section
      className={twMerge(
        "[&:first-child]:-mt-[1px]",
        "[&:not(:first-child)]:my-1.5",
        "[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40",
        className,
      )}
    >
      <Header
        className={twMerge(
          "sticky z-10 truncate bg-white ps-8 pt-2 text-xs/4 text-muted",
          "top-[0px] -mx-[1px] rounded-md",
        )}
      >
        {title}
      </Header>
      <Collection items={items}>{children}</Collection>
    </Section>
  );
}

export function SelectListItem({
  destructive,
  ...props
}: ListBoxItemProps & { destructive?: true }) {
  const textValue =
    props.textValue ??
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={composeTailwindRenderProps(props.className, [
        "group flex cursor-default select-none items-center gap-x-2 rounded-md outline-none",
        "px-1.5 py-2.5 has-submenu:pe-0 sm:py-1.5",
        "text-base/6 sm:text-sm/6",
        "disabled:opacity-50",
        "focus:bg-zinc-100 focus:",
        destructive && "text-destructive",
      ])}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          <CheckIcon
            className={twMerge(
              "invisible mt-1 size-4 self-start group-selected:visible [[data-ui=select-value]_&]:hidden",
            )}
          />

          <div data-ui="item" className="w-full">
            {children}
          </div>
        </>
      ))}
    </AriaListBoxItem>
  );
}

export function SelectListItemLabel({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <span
      {...props}
      slot="label"
      data-ui="label"
      className={twMerge("mb-0 truncate w-full", className)}
    />
  );
}

export function SelectListItemDescription({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <Small
      {...props}
      slot="description"
      data-ui="description"
      className={className}
    />
  );
}
