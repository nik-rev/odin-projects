import React from "react";

import { useCopyToClipboard } from "@/hooks/use-clipboard";

import { Button, type ButtonWithoutAsChildProps } from "./button";
import { CopyIcon } from "./icons";
import { Tooltip, TooltipTrigger } from "./tooltip";

export type ClipboardProps = {
  timeout?: number;
  children: (payload: {
    copied: boolean;
    copy: (value: string) => void;
  }) => React.ReactNode;
};

export async function Clipboard({ timeout, children }: ClipboardProps) {
  const { copied, copy } = useCopyToClipboard({ timeout });
  return children({ copied, copy });
}

export function CopyButton({
  copyText,
  label = "Copy",
  labelCopied = "Copied to clipboard",
  variant = "plain",
  children,
  ...props
}: {
  copyText: string;
  label?: string;
  labelCopied?: string;
} & ButtonWithoutAsChildProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  console.log("children", children);
  return (
    <Clipboard>
      {({ copied, copy }) => (
        <TooltipTrigger isOpen={copied || showTooltip}>
          <Button
            variant={variant}
            {...(!children && {
              isIconOnly: true,
            })}
            aria-label={label}
            {...props}
            onHoverChange={setShowTooltip}
            onPress={() => {
              copy(copyText);
              setShowTooltip(false);
            }}
          >
            {children ?? <CopyIcon />}
          </Button>
          <Tooltip>{copied ? labelCopied : label}</Tooltip>
        </TooltipTrigger>
      )}
    </Clipboard>
  );
}
