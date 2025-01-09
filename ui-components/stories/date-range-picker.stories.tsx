import {
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
} from "@internationalized/date";
import type { Meta } from "@storybook/react";
import { useLocale } from "react-aria-components";

import { Button } from "@/components/button";
import {
  DateRangePicker,
  DateRangePickerButton,
  DateRangePickerInput,
} from "@/components/date-range-picker";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof DateRangePicker> = {
  title: "Components/Date range picker",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html#daterangepicker" target="_blank">`date range picker`</a> combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.',
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
    <DateRangePicker>
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function WithDescription() {
  return (
    <DateRangePicker>
      <Label>Stay duration</Label>
      <Description>Please enter your stay duration</Description>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function WithDescriptionHiddenTitle() {
  return (
    <DateRangePicker>
      <Label>Stay duration</Label>
      <DateRangePickerInput />
      <Description>Please enter your stay duration</Description>
    </DateRangePicker>
  );
}

export function Validation() {
  return (
    <Form className="flex flex-col items-start gap-2">
      <DateRangePicker isRequired>
        <Label>Stay duration</Label>
        <Description>Please enter your stay duration</Description>
        <DateRangePickerInput />
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export function WithMinimumAndMaximumValues() {
  return (
    <DateRangePicker
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: parseDate(
          today(getLocalTimeZone()).subtract({ days: 3 }).toString(),
        ),
        end: parseDate(
          today(getLocalTimeZone()).subtract({ days: 1 }).toString(),
        ),
      }}
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
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
  const isDateUnavailable = (date: unknown) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval.at(0)) >= 0 && date.compare(interval.at(1)) <= 0,
    );

  return (
    <DateRangePicker
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      validationBehavior="native"
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function WithNonContiguousRange() {
  const { locale } = useLocale();
  return (
    <DateRangePicker
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    >
      <Label>Stay duration</Label>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function WithDisable() {
  return (
    <DateRangePicker isDisabled>
      <Label>Stay duration</Label>
      <Description>Please enter your stay duration</Description>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function WithReadonly() {
  return (
    <DateRangePicker isReadOnly>
      <Label>Stay duration</Label>
      <Description>Please enter your stay duration</Description>
      <DateRangePickerInput />
    </DateRangePicker>
  );
}

export function DateRangePickerButtons() {
  return (
    <Form className="flex flex-col items-start gap-2">
      <DateRangePicker isRequired>
        <Label>Stay duration</Label>
        <Description>Please select your stay duration</Description>
        <DateRangePickerButton>Select date range</DateRangePickerButton>
        <FieldError />
      </DateRangePicker>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
