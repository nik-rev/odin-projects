import type { Meta } from "@storybook/react";
import React from "react";
import { DialogTrigger, FileTrigger } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  Checkbox,
  Checkboxes,
  CheckboxField,
  CheckboxGroup,
} from "@/components/checkbox";
import {
  DateRangePicker,
  DateRangePickerInput,
} from "@/components/date-range-picker";
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import {
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@/components/field";
import { Form } from "@/components/form";
import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Modal } from "@/components/modal";
import { NumberField, NumberInput } from "@/components/number-field";
import { PasswordInput } from "@/components/password-input";
import { Radio, RadioField, RadioGroup } from "@/components/radio-group";
import { Slider, SliderOutput, SliderTack } from "@/components/slider";
import { Switch } from "@/components/switch";
import { Tab, TabList, Tabs } from "@/components/tabs";
import { Strong, Text, TextLink } from "@/components/text";

import { WithAvatars } from "./multi-select.stories";
import { WithFlags } from "./select.stories";
import { NativeTooltips } from "./tooltip.stories";

const meta: Meta<typeof Button> = {
  title: "Components/Overview",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export function Example() {
  return (
    <div className="flex gap-12 p-8">
      <div className="flex w-96 flex-col items-stretch gap-12">
        <div className="flex flex-col ">
          <Heading level={2} className="mb-6 text-center">
            Sign in to ACME
          </Heading>
          <Form>
            <TextField>
              <Label>Email address</Label>
              <Input type="email" name="email" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <PasswordInput />
            </TextField>
            <div className="flex justify-between">
              <Switch labelPosition="right">Remember me</Switch>
              <Link>
                <Strong>Forgot password?</Strong>
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <div className="flex justify-center">
              <Text>Don’t have an account?</Text>&nbsp;
              <Link>
                <Strong>Create an account</Strong>
              </Link>
            </div>
          </Form>
        </div>
        <RadioGroup
          className="flex-1 gap-3"
          defaultValue="Root user"
          aria-label="Choose user type"
        >
          <RadioField>
            <Radio
              value="Root user"
              className={({ isSelected }) =>
                twMerge(
                  "items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5",
                  isSelected && "border-accent ring-1 ring-accent",
                )
              }
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex flex-1 flex-col">
                  <div className="font-semibold"> Root user</div>
                  <Text>
                    Account owner that performs tasks requiring unrestricted
                    access.{" "}
                    <TextLink href="https://www.example.com" target="_blank">
                      Learn more
                    </TextLink>
                  </Text>
                </div>
              </div>
            </Radio>
          </RadioField>
          <Radio
            value="IAM user"
            className={({ isSelected }) =>
              twMerge(
                "items-start rounded-md border p-3 shadow-sm [&_[slot=radio]]:mt-1.5",
                isSelected && "border-accent ring-1 ring-accent",
              )
            }
          >
            <div className="flex w-full items-center justify-between gap-3">
              <div className="flex flex-1 flex-col">
                <div className="font-semibold">IAM user</div>
                <Text>
                  User within an account that performs daily tasks.{" "}
                  <TextLink href="https://www.example.com" target="_blank">
                    Learn more
                  </TextLink>
                </Text>
              </div>
            </div>
          </Radio>
        </RadioGroup>

        <Slider
          minValue={70}
          maxValue={200}
          defaultValue={100}
          step={10}
          className="flex w-[350px] flex-col"
        >
          <div className="flex flex-1 items-end">
            <Label className="text-nowrap pb-1 pe-4 font-normal">Zoom</Label>
            <div className="flex flex-1 flex-col">
              <SliderOutput className="self-center">
                {({ state }) => (
                  <span className="text-sm">
                    {state.getThumbValueLabel(0)}%
                  </span>
                )}
              </SliderOutput>
              <div className="flex flex-1 items-center gap-3">
                <SliderTack thumbLabels={["volume"]} />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="flex w-96 flex-col gap-4">
        <div className="flex gap-2">
          <Button>Submit</Button>
          <Button variant="outline">Submit</Button>

          <NativeTooltips />

          <DialogExample />
        </div>

        <NumberField maxValue={10} defaultValue={5}>
          <Label>Seat(s)</Label>
          <Description>Maximum of 10</Description>
          <NumberInput />
        </NumberField>

        <WithFlags />

        <TextField>
          <Label>About</Label>
          <Description>Write a few sentences about yourself.</Description>
          <TextArea rows={2} />
        </TextField>

        <CheckboxGroup defaultValue={["Post"]}>
          <Label>Audience, media and tagging</Label>
          <Description>
            Manage what information you allow other people to see.
          </Description>

          <Checkboxes>
            <CheckboxField>
              <Checkbox value="Post">Protect your post</Checkbox>
              <Description>
                Your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>

            <CheckboxField>
              <Checkbox value="Video">Protect your videos</Checkbox>
              <Description>
                your posts and other account information are only visible to
                people who follow you.
              </Description>
            </CheckboxField>
          </Checkboxes>
        </CheckboxGroup>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <ChangeProfile />
        </div>
        <div>
          <DateRangePicker>
            <Label>Stay duration</Label>
            <DateRangePickerInput />
          </DateRangePicker>
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-8">
          <div className="text-2xl font-bold">
            Craft world-class accessible components
          </div>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <Link
                href="https://react-spectrum.adobe.com/react-aria/components.html"
                target="_blank"
                className="flex-1"
              >
                <img
                  aria-hidden
                  className="size-5"
                  alt="react aria component"
                  src="https://spectrum.adobe.com/_next/static/media/adobe_logo_spectrum_site.b6d47fe3.svg"
                />{" "}
                React React Component
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                className="flex-1"
              >
                <img
                  aria-hidden
                  className="size-5"
                  alt="tailwind css"
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                />
                Tailwind CSS
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <Tabs>
            <TabList>
              <Tab>My Account</Tab>
              <Tab>Company</Tab>
              <Tab>Team Members</Tab>
              <Tab>Billing</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="pills">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
          <Tabs variant="segment">
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Account</Tab>
              <Tab>Billing</Tab>
            </TabList>
          </Tabs>
          <Tabs orientation="vertical">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Analytics</Tab>
              <Tab>Reports</Tab>
              <Tab>Notifications</Tab>
            </TabList>
          </Tabs>
        </div>
        <div>
          <WithAvatars />
        </div>
      </div>
    </div>
  );
}

function ChangeProfile() {
  const [src, setSrc] = React.useState<string | undefined>(
    "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  );

  return (
    <div className="flex items-center gap-2">
      <Avatar alt="D D" className="rounded-full" src={src} />

      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const file = [...e].at(0);
          setSrc(URL.createObjectURL(file));
        }}
      >
        <Button variant="outline">Change</Button>
      </FileTrigger>
    </div>
  );
}

function DialogExample() {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Modal size="md">
        <Dialog>
          <DialogHeader>Edit profile</DialogHeader>
          <DialogCloseButton />
          <DialogBody>
            <Text>
              Make changes to your profile here. Click save when you're done.
            </Text>
            <Form className="py-4" id="edit-profile-form">
              <TextField isRequired className="grid grid-cols-4 gap-x-4">
                <Label className="ms-auto">Name</Label>
                <Input className="col-span-3" />
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
              <TextField isRequired className="grid grid-cols-4 gap-4">
                <Label className="ms-auto">Username</Label>
                <Input className="col-span-3" />
                <FieldError className="col-span-3 col-start-2" />
              </TextField>
            </Form>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <Button form="edit-profile-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
