import type { Meta } from "@storybook/react";

import { Label } from "@/components/field";
import { Tag, TagGroup, TagList } from "@/components/tag-group";

const meta: Meta<typeof Example> = {
  component: TagGroup,
  title: "Tag group",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export function Example(args: unknown) {
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
