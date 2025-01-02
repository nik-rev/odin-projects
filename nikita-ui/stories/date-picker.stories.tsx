import {
  type DateValue,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
} from "@internationalized/date";
import type { Meta } from "@storybook/react";
import { useLocale } from "react-aria-components";

import { Button } from "@/components/button";
import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from "@/components/date-picker";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Date picker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DatePicker.html" target="_bank">`date picker`</a> combines a DateField and a Calendar popover to allow users to enter or select a date and time value.',
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
    <DatePicker>
      <Label>Event date</Label>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithDescription() {
  return (
    <DatePicker>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithDescriptionHiddenTitle() {
  return (
    <DatePicker>
      <Label>Event date</Label>
      <DatePickerInput />
      <Description>Please enter the event date</Description>
    </DatePicker>
  );
}

export function WithDisabled() {
  return (
    <DatePicker isDisabled>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithMinimumAndMaximumValues() {
  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      defaultValue={parseDate(
        today(getLocalTimeZone()).subtract({ days: 1 }).toString(),
      )}
    >
      <Label>Stay duration</Label>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithUnavailableDates() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );

  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      validationBehavior="native"
    >
      <Label>Stay duration</Label>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithReadonly() {
  return (
    <DatePicker isReadOnly>
      <Label>Event date</Label>
      <Description>Please enter the event date</Description>
      <DatePickerInput />
    </DatePicker>
  );
}

export function WithValidation() {
  return (
    <Form>
      <DatePicker isRequired>
        <Label>Event date</Label>
        <Description>Please enter the event date</Description>
        <DatePickerInput />
        <FieldError />
      </DatePicker>
      <Button type="submit" variant="outline">
        Submit
      </Button>
    </Form>
  );
}

export function WithDatePickerButtons() {
  return (
    <DatePicker defaultValue={today(getLocalTimeZone())}>
      <Label>Event date</Label>
      <Description>Please pick the event date</Description>
      <DatePickerButton>Select date</DatePickerButton>
      <FieldError />
    </DatePicker>
  );
}
