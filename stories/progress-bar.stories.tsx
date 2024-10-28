import type { Meta } from "@storybook/react";

import { ProgressBar } from "@/components/progress-bar";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Components/Progress bar",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/ProgressBar.html" target="_blank">`Progress bars`</a> show either determinate or indeterminate progress of an operation over time.',
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
  return <ProgressBar label="loading" value={80} />;
}

export function Indeterminate() {
  return <ProgressBar label="loading" value={80} isIndeterminate />;
}
