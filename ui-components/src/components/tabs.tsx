import React from "react";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  type TabListProps,
  TabPanel as AriaTabPanel,
  type TabPanelProps,
  type TabProps,
  Tabs as AriaTabs,
  type TabsProps as AriaTabProps,
} from "react-aria-components";

import { composeTailwindRenderProps, focusVisibleRingStyle } from "./utils";

export default {};
const TabsContext = React.createContext<{
  variant: "underline" | "pills" | "segment";
  orientation: "vertical" | "horizontal";
}>({
  variant: "underline",
  orientation: "horizontal",
});

export type TabsProps = AriaTabProps &
  (
    | { variant?: "underline" | "pills" }
    | { variant: "segment"; orientation?: never }
  );

export function Tabs({
  variant = "underline",
  orientation = "horizontal",
  keyboardActivation = "manual",
  ...props
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, orientation }}>
      <AriaTabs
        {...props}
        keyboardActivation={keyboardActivation}
        orientation={orientation}
        className={composeTailwindRenderProps(props.className, [
          "group flex",
          orientation === "horizontal" ? "flex-col" : "flex-row",
        ])}
      />
    </TabsContext.Provider>
  );
}

const tabList = {
  base: {
    horizontal: ["whitespace-nowrap"],
    vertical: ["flex-col"],
  },
  underline: {
    horizontal: ["w-full space-x-4 border-b"],
    vertical: ["space-y-3.5 self-start border-l"],
  },
  pills: {
    horizontal: ["space-x-4"],
    vertical: ["space-y-2"],
  },
  segment: {
    horizontal: ["gap-x-4", "rounded-lg", "bg-zinc-100", "p-1", "", "", ""],
    vertical: [],
  },
};

export function TabList<T extends object & { title: string }>(
  props: TabListProps<T>,
) {
  const { className } = props;
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <div className="flex overflow-x-auto pb-px pl-px">
      <AriaTabList
        {...props}
        className={composeTailwindRenderProps(className, [
          "flex",
          "text-base/6 sm:text-sm/6",
          tabList.base[orientation],
          tabList[variant][orientation],
        ])}
      />
    </div>
  );
}

const tabPanel = {
  underline: {
    horizontal: ["py-4"],
    vertical: ["px-4"],
  },
  pills: {
    horizontal: ["px-5 py-4"],
    vertical: ["pl-8"],
  },
  segment: {
    horizontal: ["px-3 py-4"],
    vertical: [],
  },
};

export function TabPanel(props: TabPanelProps) {
  const { className } = props;
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <AriaTabPanel
      {...props}
      className={composeTailwindRenderProps(className, [
        "flex-1 outline-0",
        tabPanel[variant][orientation],
      ])}
    />
  );
}

const tab = {
  underline: {
    base: ["before:absolute", "before:bg-accent"],
    horizontal: [
      "before:bottom-[-1.5px]",
      "before:w-full",
      "before:inset-x-0",
      "selected:before:h-[2px]",
      "p-2",
    ],
    vertical: [
      "before:inset-y-0",
      "before:selected:bg-accent",
      "before:selected:left-[-1.5px]",
      "before:selected:w-[2px]",
      "px-4",
    ],
  },
  pills: {
    base: [
      "flex",
      "items-center",
      "px-3",
      "py-2",
      "rounded-lg",
      "selected:bg-accent",
      "selected:text-white",
    ],
    horizontal: [],
    vertical: [],
  },
  segment: {
    base: [
      "flex-1",
      "justify-center",
      "px-6",
      "py-1",
      "selected:bg-background",
      "",
      "selected:text-foreground",
      "selected:shadow-sm",
      "selected:rounded-[calc(theme(borderRadius.lg)-2px)]",
      "[&>[data-ui=icon]:not([class*=size-])]:size-4",
    ],
    horizontal: [],
    vertical: [],
  },
};

export function Tab(props: TabProps) {
  const { className } = props;
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <AriaTab
      {...props}
      className={composeTailwindRenderProps(className, [
        "relative flex items-center gap-x-3 rounded font-medium outline-none outline-0",
        // disable
        "disabled:opacity-50 cursor-pointer disabled:cursor-auto",

        "[&>[data-ui=icon]:not([class*=size-])]:size-[1.125rem]",

        // hover
        "[&:not([data-selected])]:text-muted",
        "[&:not([data-selected])]:hover:text-foreground",

        tab[variant].base,
        tab[variant][orientation],
        focusVisibleRingStyle,
        "focus-visible:ring-2",
      ])}
    />
  );
}
