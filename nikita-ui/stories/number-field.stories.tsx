import type { Meta } from "@storybook/react";

import { Button } from "@/components/button";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";
import { NumberField, NumberInput } from "@/components/number-field";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: "Components/Number field",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/NumberField.html#numberfield" target="_blank">`number field`</a> allows a user to enter a number, and increment or decrement the value using stepper buttons.',
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
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <NumberInput />
    </NumberField>
  );
}

export function WithDescription() {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
}

export function WithDescriptionHiddenTitle() {
  return (
    <NumberField maxValue={7}>
      <Label>Viewer(s)</Label>
      <NumberInput />
      <Description>Maximum of 7</Description>
    </NumberField>
  );
}

export function WithDisabled() {
  return (
    <NumberField isDisabled>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
}

export function WithReadonly() {
  return (
    <NumberField isReadOnly>
      <Label>Viewer(s)</Label>
      <Description>Maximum of 7</Description>
      <NumberInput />
    </NumberField>
  );
}

export function Validation() {
  return (
    <Form>
      <NumberField maxValue={7} isRequired>
        <Label>Viewer(s)</Label>
        <Description>Maximum of 7</Description>
        <NumberInput placeholder="Type a number&hellip;" />
        <FieldError />
      </NumberField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
