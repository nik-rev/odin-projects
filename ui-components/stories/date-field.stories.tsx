import type { Meta } from "@storybook/react";

import { Button } from "@/components/button";
import { DateField, DateInput } from "@/components/date-field";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof DateField> = {
  title: "Components/Date field",
  component: DateField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateField.html#datefield" target="_blank">`date field`</a> allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.',
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
    <DateField>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  );
}

export function WithDescription() {
  return (
    <DateField>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
}

export function WithDescriptionHidden() {
  return (
    <DateField>
      <Label>Birth date</Label>
      <DateInput />
      <Description>Please enter your birth date</Description>
    </DateField>
  );
}

export function WithDisabled() {
  return (
    <DateField isDisabled>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
}

export function WithReadonly() {
  return (
    <DateField isReadOnly>
      <Label>Birth date</Label>
      <Description>Please enter your birth date</Description>
      <DateInput />
    </DateField>
  );
}

export function WithValidation() {
  return (
    <Form className="flex flex-col items-start gap-2">
      <DateField isRequired>
        <Label>Birth date</Label>
        <Description>Please enter your birth date</Description>
        <DateInput />
        <FieldError />
      </DateField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
