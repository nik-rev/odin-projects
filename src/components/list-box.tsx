import React from "react";
import {
  Collection,
  composeRenderProps,
  Header,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps as AriaListBoxProps,
  Section,
  type SectionProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { CheckIcon } from "./icons";
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from "./utils";

export default {};
export type ListBoxProps<T> = {} & Omit<
  AriaListBoxProps<T>,
  "layout" | "orientation"
>;

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Fix not auto scroll to selected item
  React.useEffect(() => {
    if (ref.current) {
      const selectedItem = ref.current.querySelector("[aria-selected=true]");
      if (selectedItem) {
        const timer = setTimeout(() => {
          selectedItem.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }, 50);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <AriaListBox
      {...props}
      className={composeTailwindRenderProps(props.className, ["outline-none"])}
      ref={ref}
    >
      {children}
    </AriaListBox>
  );
}

export function ListBoxItem(props: ListBoxItemProps) {
  const { children, textValue, className } = props;

  const processedTextValue =
    textValue ?? (typeof children === "string" ? children : undefined);

  return (
    <AriaListBoxItem
      {...props}
      textValue={processedTextValue}
      className={composeTailwindRenderProps(className, [
        "group relative flex outline-0",
        "disabled:opacity-50 cursor-pointer disabled:cursor-default",
        focusVisibleOutlineStyle,
      ])}
    >
      {children}
    </AriaListBoxItem>
  );
}

export function DropdownItem({
  destructive,
  ...props
}: ListBoxItemProps & { destructive?: true }) {
  const { textValue, children, className } = props;

  const processedTextValue =
    textValue ?? (typeof children === "string" ? children : undefined);

  return (
    <AriaListBoxItem
      {...props}
      textValue={processedTextValue}
      className={composeRenderProps(
        className,
        (renderClassName, { isDisabled, isFocused }) =>
          twMerge([
            "group flex cursor-default select-none items-center gap-x-1 rounded-md outline-none",
            "px-1.5 py-2.5 has-submenu:pe-0 sm:py-1.5",
            "text-base/6 sm:text-sm/6",
            isDisabled && "opacity-50",
            isFocused && "bg-zinc-100",
            destructive && "text-destructive",
            renderClassName,
          ]),
      )}
    >
      {composeRenderProps(children, (renderChildren, { isSelected }) => (
        <>
          <CheckIcon
            className={twMerge(
              "mt-1 size-4 self-start [[data-ui=select-value]_&]:hidden",
              isSelected ? "visible" : "invisible",
            )}
          />

          <div data-ui="item">{renderChildren}</div>
        </>
      ))}
    </AriaListBoxItem>
  );
}

export type DropdownSectionProps<T> = {
  title?: string;
} & SectionProps<T>;

export function DropdownSection<T extends object>({
  className,
  ...props
}: DropdownSectionProps<T>) {
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
          "sticky z-10 truncate bg-white px-7 pt-2 text-xs/4 text-muted",
          "top-[0px] -mx-[1px] rounded-md backdrop-blur-md",
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
