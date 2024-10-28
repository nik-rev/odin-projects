import type { Meta } from "@storybook/react";

import { Meter } from "@/components/meter";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Meter> = {
  component: Meter,
  title: "Components/Meter",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Meter.html#meter" target="_blank">`meter`</a> represents a quantity within a known range, or a fractional value.',
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
    <div className="flex flex-col gap-4">
      <Meter label="Storage space" value={20} />
      <Meter label="Storage space" value={80} />
      <Meter label="Storage space" value={70} />
    </div>
  );
}

export function PositiveMeter() {
  return (
    <div className="flex flex-col gap-4">
      <Meter label="Progress" value={25} valueLabel="1 of 4" positive />
      <Meter label="Progress" value={75} valueLabel="3 of 4" positive />
    </div>
  );
}

export function InformativeMeter() {
  return <Meter label="Space used" value={25} informative />;
}
