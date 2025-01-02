import type { Meta } from "@storybook/react";

import { Button } from "@/components/button";
import { DateInput } from "@/components/date-field";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";
import { TimeField } from "@/components/time-field";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof TimeField> = {
  title: "Components/Time field",
  component: TimeField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/TimeField.html" target="_blank">`time field`</a> allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.',
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
    <TimeField>
      <Label>Appointment time</Label>
      <DateInput />
    </TimeField>
  );
}

export function WithDescription() {
  return (
    <TimeField>
      <Label>Appointment time</Label>
      <Description>The specific time scheduled for your meeting</Description>
      <DateInput />
    </TimeField>
  );
}

export function WithDescriptionHiddenTitle() {
  return (
    <TimeField>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
}

export function WithDisabled() {
  return (
    <TimeField isDisabled>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
}

export function WithReadonly() {
  return (
    <TimeField isReadOnly>
      <Label>Appointment time</Label>
      <DateInput />
      <Description>The specific time scheduled for your meeting</Description>
    </TimeField>
  );
}

export function WithValidation() {
  return (
    <Form>
      <TimeField isRequired>
        <Label>Appointment time</Label>
        <Description>The specific time scheduled for your meeting</Description>
        <DateInput />
        <FieldError />
      </TimeField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
