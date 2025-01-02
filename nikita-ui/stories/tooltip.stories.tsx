import type { Meta } from "@storybook/react";
import { Moon, Sun } from "lucide-react";
import React from "react";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Button } from "@/components/button";
import {
  NativeTooltip,
  NonFousableTooltipTarget,
  Tooltip,
  TooltipTrigger,
} from "@/components/tooltip";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">`tooltip`</a> displays a description of an element on hover or focus. Tooltip target need to be focusable.',
      },
      ...docs,
      controls: {
        exclude: /.*/gv,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export function BasicExample() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
      <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
  );
}

export function WithNonFocusableElements() {
  return (
    <TooltipTrigger>
      <NonFousableTooltipTarget>
        <div>Hover me</div>
      </NonFousableTooltipTarget>
      <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
  );
}

WithNonFocusableElements.parameters = {
  docs: {
    description: {
      story:
        'Use the `NonFousableTooltipTarge` prop to show a tooltip on <a href="https://argos-ci.com/blog/react-aria-migration" target="_blank">`non-focusable`</a> element.',
    },
  },
};

export function WithDisabledElements() {
  return (
    <TooltipTrigger>
      <NonFousableTooltipTarget>
        <div>
          <Button variant="outline" isDisabled>
            Hover me
          </Button>
        </div>
      </NonFousableTooltipTarget>
      <Tooltip>I am a tooltip</Tooltip>
    </TooltipTrigger>
  );
}

WithDisabledElements.parameters = {
  docs: {
    description: {
      story:
        "Use the `NonFousableTooltipTarget` component and `div` to show a tooltip on disabled elements.",
    },
  },
};

export function NativeTooltips() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const title =
    theme === "light" ? "Switch to dark theme" : "Switch to light theme";

  return (
    <NativeTooltip title={title}>
      <Button
        isIconOnly
        variant="outline"
        onPress={() => {
          setTheme((theme) => (theme === "light" ? "dark" : "light"));
        }}
      >
        <AccessibleIcon aria-label={title}>
          {theme === "light" ? <Moon /> : <Sun />}
        </AccessibleIcon>
      </Button>
    </NativeTooltip>
  );
}

NativeTooltips.parameters = {
  docs: {
    description: {
      story:
        'The `NativeTooltip` component uses <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title" target="_blank">`title`</a> attribute to create a native html tooltip.',
    },
  },
};
