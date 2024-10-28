import type { Meta } from "@storybook/react";
import { Volume, Volume2 } from "lucide-react";

import { Description, Label } from "@/components/field";
import { Slider, SliderOutput, SliderTack } from "@/components/slider.tsx";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Slider.html#slider" target="_blank">`slider`</a> allows a user to select one or more values within a range.',
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
    <Slider minValue={50} maxValue={200} defaultValue={[100, 150]}>
      <Label className="text-xl">Price range</Label>
      <Description className="pb-4">
        Nightly prices including fees and taxes
      </Description>
      <SliderTack thumbLabels={["start", "end"]} />
      <SliderOutput>
        {({ state }) => (
          <div className="flex justify-between gap-2">
            <div className="flex flex-col">
              <div className="text-sm text-muted">Minimum</div>
              <div>{state.getThumbValueLabel(0)}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-muted">Maximum</div>
              <div>{state.getThumbValueLabel(1)}</div>
            </div>
          </div>
        )}
      </SliderOutput>
    </Slider>
  );
}

export function VerticalSlide() {
  return (
    <Slider
      minValue={50}
      maxValue={200}
      defaultValue={[100, 150]}
      orientation="vertical"
    >
      <Label className="text-xl">Price range</Label>
      <SliderTack thumbLabels={["start", "end"]} />
      <SliderOutput>
        {({ state }) => (
          <div className="flex justify-between gap-5 text-center">
            <div className="flex flex-col">
              <div className="text-sm text-muted">Minimum</div>
              <div>{state.getThumbValueLabel(0)}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-muted">Maximum</div>
              <div>{state.getThumbValueLabel(1)}</div>
            </div>
          </div>
        )}
      </SliderOutput>
    </Slider>
  );
}

export function OneThumb() {
  return (
    <Slider
      minValue={50}
      maxValue={200}
      defaultValue={100}
      className="flex w-[350px] flex-col"
    >
      <div className="flex flex-1 items-end">
        <Label className="text-nowrap pe-4 font-normal pb-1">
          Output Volume:
        </Label>
        <div className="flex flex-1 flex-col">
          <SliderOutput className="self-center">
            {({ state }) => (
              <span className="text-sm">{state.getThumbValueLabel(0)}</span>
            )}
          </SliderOutput>
          <div className="flex flex-1 items-center gap-3">
            <Volume className="size-8 translate-x-[50%]" strokeWidth={1.5} />
            <SliderTack thumbLabels={["volume"]} />
            <Volume2 className="size-8" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </Slider>
  );
}
