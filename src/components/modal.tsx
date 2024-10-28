import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
} from "react-aria-components";

import { composeTailwindRenderProps } from "./utils";

export default {};
const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
  fullWidth: "h-full w-full",
};

type ModalType =
  | { drawer?: never; keepCentered?: boolean }
  | {
      drawer: true;
      placement?: "left" | "right";
      keepCentered?: never;
    };

type ModalProps = Omit<AriaModalOverlayProps, "className"> & {
  size?: keyof typeof sizes;
  classNames?: {
    modalOverlay?: AriaModalOverlayProps["className"];
    modal?: AriaModalOverlayProps["className"];
  };
} & ModalType;

export function Modal({
  classNames,
  keepCentered = false,
  ...props
}: ModalProps) {
  const { drawer: isDrawer, size } = props;
  const placement = isDrawer ? (props.placement ?? "left") : undefined;

  return (
    <AriaModalOverlay
      {...props}
      className={composeTailwindRenderProps(classNames?.modalOverlay, [
        "fixed left-0 top-0 isolate z-20",
        "h-[--visual-viewport-height] w-full",
        "bg-zinc-950/40",
        "flex",
        "items-center",
        "text-center",

        "entering:animate-in",
        "entering:fade-in",
        "entering:duration-300",
        "entering:ease-out",

        "exiting:animate-out",
        "exiting:fade-out",
        "exiting:duration-200",
        "exiting:ease-in",

        isDrawer
          ? [
              "p-2 [--visual-viewport-vertical-padding:16px]",
              "[&:has([data-replacement=right])]:justify-end",
            ]
          : [
              "justify-center",
              "p-4",
              "[--visual-viewport-vertical-padding:32px]",

              !keepCentered && [
                "[&:has([role=dialog])]:items-end",
                "[&:has([role=dialog])]:pt-4",
                "[&:has([role=dialog])]:px-0",
                "[&:has([role=dialog])]:pb-0",
                "[&:has([role=dialog])]:[--visual-viewport-vertical-padding:16px]",

                "sm:[&:has([role=dialog])]:items-center",
                "sm:[&:has([role=dialog])]:p-4",
                "sm:[&:has([role=dialog])]:[--visual-viewport-vertical-padding:32px]",
              ],
            ],
      ])}
    >
      <AriaModal
        {...props}
        data-replacement={placement}
        className={composeTailwindRenderProps(classNames?.modal, [
          "max-h-full w-full overflow-hidden",
          "text-left align-middle",
          "shadow-lg",
          "bg-white",
          "",

          size
            ? sizes[size]
            : "sm:has-[[role=alertdialog]]:max-w-md sm:has-[[role=dialog]]:max-w-lg",

          "entering:animate-in",
          "entering:ease-out",
          "entering:duration-200",
          "exiting:animate-out",
          "exiting:ease-in",
          "exiting:duration-200",

          isDrawer
            ? [
                "h-full",
                "rounded-xl",
                "data-[replacement=left]:entering:slide-in-from-left",
                "data-[replacement=right]:entering:slide-in-from-right",
                "data-[replacement=left]:exiting:slide-out-to-left",
                "data-[replacement=right]:exiting:slide-out-to-right",
              ]
            : [
                "rounded-xl",
                "entering:zoom-in-95",
                "exiting:zoom-out-95",

                !keepCentered && [
                  "has-[[role=dialog]]:rounded-t-xl ",
                  "has-[[role=dialog]]:rounded-b-none",
                  "sm:has-[[role=dialog]]:rounded-xl",

                  "has-[[role=dialog]]:entering:zoom-in-100",
                  "has-[[role=dialog]]:entering:slide-in-from-bottom",
                  "sm:has-[[role=dialog]]:entering:zoom-in-95",
                  "sm:has-[[role=dialog]]:entering:slide-in-from-bottom-0",

                  "has-[[role=dialog]]:exiting:zoom-out-100",
                  "has-[[role=dialog]]:exiting:slide-out-to-bottom",
                  "sm:has-[[role=dialog]]:exiting:zoom-out-95",
                  "sm:has-[[role=dialog]]:exiting:slide-out-to-bottom-0",
                ],
              ],
        ])}
      />
    </AriaModalOverlay>
  );
}
