import type { Meta } from "@storybook/react";
import React from "react";
import { useListData } from "react-stately";

import { Button } from "@/components/button";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";
import { TagsInput, TagsInputField } from "@/components/tag-input";

import { docs } from "../.storybook/docs";

const meta: Meta = {
  title: "Components/Tag input",
  parameters: {
    layout: "centered",
    docs: {
      ...docs,
      controls: {
        exclude: /.*/gv,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export function Example() {
  const list = useListData({
    initialItems: [{ id: 1, name: "React" }],
  });

  const [isInvalid, setIsInvalid] = React.useState(false);

  return (
    <Form
      onSubmit={(e) => {
        if (list.items.length === 0) {
          setIsInvalid(true);

          e.preventDefault();
          return;
        }

        setIsInvalid(false);
      }}
    >
      <TagsInputField
        className="w-full sm:w-72"
        name="framework"
        list={list}
        onTagAdd={() => {
          setIsInvalid(false);
        }}
        isInvalid={isInvalid}
      >
        <Label>Frameworks</Label>
        <Description>Add Framework</Description>
        <TagsInput />
        <FieldError>Please fill out this field.</FieldError>
      </TagsInputField>
      <Button type="submit">Save</Button>
    </Form>
  );
}
