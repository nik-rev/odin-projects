import type { Meta } from "@storybook/react";

import { Label } from "@/components/field";
import { Tag, TagGroup, TagList } from "@/components/tag-group";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  title: "Components/Tag group",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Button.html" target="_blank">`button`</a> allows a user to perform an action, with mouse, touch, and keyboard interactions.',
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

export function BasicExample(args: object) {
  return (
    <TagGroup
      {...args}
      defaultSelectedKeys={["strawberry"]}
      selectionMode="single"
      onRemove={() => {
        //
      }}
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag isDisabled id="chocolate">
          Chocolate
        </Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
}

export function Destructive(args: object) {
  return (
    <TagGroup
      color="destructive"
      {...args}
      defaultSelectedKeys={["strawberry"]}
      selectionMode="single"
      onRemove={() => {
        //
      }}
    >
      <Label>Ice cream flavor</Label>
      <TagList>
        <Tag isDisabled id="chocolate">
          Chocolate
        </Tag>
        <Tag id="mint">Mint</Tag>
        <Tag id="strawberry">Strawberry</Tag>
        <Tag id="vanilla">Vanilla</Tag>
      </TagList>
    </TagGroup>
  );
}
