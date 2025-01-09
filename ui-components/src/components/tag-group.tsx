import React from "react";
import {
  Button,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  type TagGroupProps as AriaTagGroupProps,
  TagList as AriaTagList,
  type TagListProps,
  type TagProps as AriaTagProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { XIcon } from "./icons";
import { composeTailwindRenderProps, focusVisibleOutlineStyle } from "./utils";

const colors = {
  default: [
    "selected:border-accent",
    "selected:bg-accent",
    "selected:text-white",
    "selected:outline-0",
  ],
  success: [
    "bg-success/10",
    "border-success1",
    "",
    "",
    "selected:bg-success",
    "selected:border-success",
    "selected:",
    "selected:text-white",
  ],
  warning: [
    "bg-warning/10",
    "border-warning1",
    "",
    "",
    "selected:bg-warning",
    "selected:border-warning",
    "selected:",
    "selected:text-white",
  ],
  destructive: [
    "bg-destructive/10",
    "border-destructive1",
    "",
    "",
    "selected:bg-destructive",
    "selected:border-destructive",
    "selected:",
    "selected:text-white",
  ],
};

type Color = keyof typeof colors;

const ColorContext = React.createContext<Color>("default");

export type TagGroupProps = {
  color?: Color;
} & AriaTagGroupProps;

export type TagProps = {
  color?: Color;
} & AriaTagProps;

export function TagGroup({ children, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge("flex flex-col gap-1", props.className)}
    >
      <ColorContext.Provider value={props.color ?? "default"}>
        {children}
      </ColorContext.Provider>
    </AriaTagGroup>
  );
}

export function TagList<T extends object>(props: TagListProps<T>) {
  const { className } = props;

  return (
    <AriaTagList
      {...props}
      className={composeTailwindRenderProps(className, "flex flex-wrap gap-1")}
    />
  );
}

export function Tag({ children, color, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;
  const groupColor = React.useContext(ColorContext);

  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "flex max-w-fit cursor-default items-center gap-1 rounded-md border px-1 py-0.5 text-xs transition",
        colors[color ?? groupColor],
        focusVisibleOutlineStyle,
        "focus-visible:outline-offset-1",
        "disabled:opacity-50",
      ])}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              slot="remove"
              className={composeTailwindRenderProps("", [
                "flex cursor-default items-center justify-center rounded-full p-0.5 outline-0 transition-[background-color] hover:bg-black/10 pressed:bg-black/20",
                focusVisibleOutlineStyle,
              ])}
            >
              <XIcon className="size-3" />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
