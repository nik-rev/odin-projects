import {
  Collection,
  composeRenderProps,
  Header,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  Section,
  type SectionProps,
  Separator,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Button, type ButtonWithoutAsChildProps } from "./button";
import { CheckIcon, ChevronDownIcon, ChevronRightIcon } from "./icons";
import { Popover, type PopoverProps } from "./popover";
import { Small } from "./text";
import { composeTailwindRenderProps } from "./utils";

export default {};
export { MenuTrigger, SubmenuTrigger } from "react-aria-components";

type MenuButtonProps = ButtonWithoutAsChildProps & {
  noIndicator?: boolean;
};

export function MenuButton({
  className,
  noIndicator,
  variant,
  children,
  ...props
}: MenuButtonProps) {
  // Set`outline` as the default button style
  const buttonVariant = variant ?? "outline";

  return (
    <Button
      {...props}
      variant={buttonVariant}
      className={composeTailwindRenderProps(className, [
        "gap-1",
        "pressed:scale-[0.97] pressed:opacity-75",
        "group-data-[ui=button-group]:pressed:scale-100",
        "group-data-[ui=button-group]:pressed:opacity-100",
        buttonVariant === "unstyle" ? "" : "px-2.5",
      ])}
    >
      {(renderProps) => (
        <>
          {typeof children === "function" ? children(renderProps) : children}
          {!noIndicator && (
            <ChevronDownIcon
              strokeWidth={2.5}
              className={twMerge(
                Boolean(children) && "ms-1",
                "[.justify-start_&]:ms-auto",
                "[[data-variant=outline]:not(:hover)_&]:text-muted",
                "[[data-variant=solid]:not(:hover)_&]:text-white/75",
              )}
            />
          )}
        </>
      )}
    </Button>
  );
}

export function MenuPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      {...props}
      className={composeTailwindRenderProps(
        className,
        twMerge(
          "",
          "",
          "max-w-72",
          "rounded-lg",
          "min-w-[max(144px,var(--trigger-width))]",
          "has-[[data-ui=item]_[data-ui=icon]]:min-w-[max(200px,var(--trigger-width))]",
          "has-[[data-ui=item]_kbd]:min-w-[max(176px,var(--trigger-width))]",
        ),
      )}
    />
  );
}
export function Menu<T extends object>(props: AriaMenuProps<T>) {
  const { className } = props;

  return (
    <AriaMenu
      {...props}
      className={twMerge(
        "flex max-h-[inherit] flex-col overflow-auto outline-none",
        "p-1 has-[header]:px-2 has-[header]:pt-0",

        // MeuItem style
        "[&_[data-ui=item]]:flex-1",
        "[&_[data-ui=item]]:grid",
        "[&_[data-ui=item]:has([data-ui=label])]:grid-cols-[16px_1fr_minmax(50px,max-content)]",
        "[&_[data-ui=item]]:items-center",
        "[&_[data-ui=item]]:gap-x-2",

        // icon
        "[&_[data-ui=item]>[data-ui=icon]:not([class*=text-])]:text-muted",
        "[&_[data-ui=item][data-destructive]>[data-ui=icon]]:text-destructive/75",
        "[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=icon]:not([class*=size-])]:size-4",
        "[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=icon]]:col-start-1",

        "[&_[data-ui=item]>[data-ui=label]]:col-span-full",
        "[&:has([data-ui=icon]+[data-ui=label])_[data-ui=item]>[data-ui=label]]:col-start-2",

        // kbd
        "[&:has([data-ui=kbd])_[data-ui=item]>[data-ui=label]]:col-end-[-2]",
        "[&_[data-ui=item]>[data-ui=kbd]]:col-span-1",
        "[&_[data-ui=item]>[data-ui=kbd]]:row-start-1",
        "[&_[data-ui=item]>[data-ui=kbd]]:col-start-3",
        "[&_[data-ui=item]>[data-ui=kbd]]:justify-self-end",
        "[&_[data-ui=item][data-destructive]>[data-ui=kbd]]:text-destructive",

        // Description
        "[&_[data-ui=item]>[data-ui=description]]:col-span-full",
        "[&:has([data-ui=kbd])_[data-ui=item]>[data-ui=description]]:col-end-[-2]",
        "[&:has([data-ui=icon]+[data-ui=label]+[data-ui=description])_[data-ui=item]>[data-ui=description]]:col-start-2",
        className,
      )}
    />
  );
}

export function SubMenu<T extends object>(
  props: AriaMenuProps<T> & { "aria-label": string },
) {
  return <Menu {...props} />;
}

export function MenuSeparator({ className }: { className?: string }) {
  return (
    <Separator
      className={twMerge(
        "my-1 w-[calc(100%-24px)] self-center border-t border-zinc-950/5",
        className,
      )}
    />
  );
}

type MenuItemProps = AriaMenuItemProps & {
  destructive?: true;
};

export function MenuItem({ destructive, ...props }: MenuItemProps) {
  return (
    <AriaMenuItem
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isFocused, isDisabled }) =>
          twMerge([
            "group flex cursor-default select-none items-center gap-x-2 outline-none",
            "px-3 py-2.5 sm:py-1.5 [&[data-selection-mode]]:px-2",
            "rounded-md",
            "text-base/6 sm:text-sm/6",
            isDisabled && "opacity-50",
            isFocused && "bg-zinc-100",
            destructive && "text-destructive",
            className,
          ]),
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, isHovered }) => (
          <>
            {selectionMode !== "none" && (
              <span
                data-ui="icon"
                className={twMerge(
                  "flex w-4 self-start",
                  isSelected && "mt-[5px]",
                )}
              >
                {isSelected && <CheckIcon className="size-4" />}
              </span>
            )}

            <div
              data-ui="item"
              data-destructive={destructive}
              data-hovered={isHovered}
            >
              {children}
            </div>
            {/* Submenu indicator */}
            <ChevronRightIcon className="-me-2 hidden size-4 text-muted group-data-[has-submenu]:inline-block" />
          </>
        ),
      )}
    </AriaMenuItem>
  );
}

export function MenuItemLabel({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <span
      slot="label"
      data-ui="label"
      className={twMerge("mb-0 truncate", className)}
      {...props}
    />
  );
}

export function MenuItemDescription({
  className,
  ...props
}: React.JSX.IntrinsicElements["span"]) {
  return (
    <Small
      slot="description"
      data-ui="description"
      className={className}
      {...props}
    />
  );
}

export type MenuSectionProps<T> = {
  title?: string;
} & SectionProps<T>;

export function MenuSection<T extends object>({
  className,
  ...props
}: MenuSectionProps<T>) {
  return (
    <Section
      className={twMerge(
        "[&:first-child]:-mt-[1px]",
        "[&:not(:first-child)]:my-1.5",
        "[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-border/40",
        // Header
        // selectionMode = none
        "[&_header]:px-3",
        // has icon
        "[&:has([data-ui=item]>[data-ui=icon]+[data-ui=label])_header]:px-4",
        // electionMode !== none
        "[&:has([role=menuitemradio])_header]:ps-8",
        // has icon
        "[&:has([role=menuitemradio]>[data-ui=item]>[data-ui=icon]+[data-ui=label])_header]:ps-9",
        className,
      )}
    >
      <Header
        className={twMerge(
          "sticky z-10 truncate bg-white pt-2 text-xs/4 text-muted",
          "top-[0px] -mx-[1px] rounded-md backdrop-blur-md",
        )}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
