import {
  DropZone as RACDropZone,
  type DropZoneProps,
} from "react-aria-components";

import {
  composeTailwindRenderProps,
  dropTargetOutlineStyle,
  focusVisibleOutlineStyle,
} from "./utils";

export function DropZone(props: DropZoneProps) {
  const { className } = props;

  return (
    <RACDropZone
      {...props}
      className={composeTailwindRenderProps(className, [
        "sm:min-w-96",
        "flex flex-shrink-0 flex-col items-center justify-center rounded-xl",
        "border border-dashed p-2",
        focusVisibleOutlineStyle,
        "drop-target:border-solid",
        "drop-target:bg-accent/20 drop-target:",
        dropTargetOutlineStyle,
      ])}
    />
  );
}
