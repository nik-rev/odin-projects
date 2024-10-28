import type { Meta } from "@storybook/react";
import { Settings } from "lucide-react";
import React from "react";
import { DialogTrigger } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Avatar, AvatarBadge } from "@/components/avatar";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { Input, Label, TextField } from "@/components/field";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuTrigger,
} from "@/components/menu";
import { NativeSelect, NativeSelectField } from "@/components/native-select";
import { Popover } from "@/components/popover";
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectPopover,
} from "@/components/select";
import { Separator } from "@/components/separator";
import { Available, Away, Busy, DoNotDisturb } from "@/components/status";
import { Switch } from "@/components/switch";
import { Strong, Text } from "@/components/text";

import { docs } from "../.storybook/docs.ts";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Popover.html#popover" target="_blank">`popover`</a> is an overlay element positioned relative to a trigger.',
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
    <DialogTrigger>
      <>
        <Button aria-label="Settings" variant="outline">
          <AccessibleIcon>
            <Settings />
          </AccessibleIcon>
          Settings
        </Button>
        <Popover className="min-w-56 rounded-xl">
          <Dialog>
            <div className="flex flex-col gap-2 p-3 overflow-y-auto">
              <div className="flex gap-4">
                <Avatar
                  src="https://images.unsplash.com/photo-1578680671705-0965e325b2ba?q=80&w=2306&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt="Lisa Wilson"
                >
                  <AvatarBadge aria-label="Available" badge={<Available />} />
                </Avatar>
                <div className="flex flex-col">
                  <Strong>Lisa Wilson</Strong>
                  <Text className="sm:leading-4">Admin</Text>
                </div>
              </div>

              <Separator className="mt-2" />

              <MenuTrigger>
                <MenuButton
                  variant="plain"
                  className="justify-start gap-3 font-medium"
                >
                  <Available className="size-3" />
                  Available
                </MenuButton>
                <MenuPopover placement="end top">
                  <Menu>
                    <MenuItem>
                      <AccessibleIcon>
                        <Available className="size-3" />
                      </AccessibleIcon>
                      <MenuItemLabel>Available</MenuItemLabel>
                    </MenuItem>
                    <MenuItem>
                      <AccessibleIcon>
                        <Busy className="size-3" />
                      </AccessibleIcon>
                      <MenuItemLabel>Busy</MenuItemLabel>
                    </MenuItem>
                    <MenuItem>
                      <AccessibleIcon>
                        <Away className="size-3" />
                      </AccessibleIcon>
                      <MenuItemLabel>Away</MenuItemLabel>
                    </MenuItem>
                    <MenuItem>
                      <AccessibleIcon>
                        <DoNotDisturb className="size-3" />
                      </AccessibleIcon>
                      <MenuItemLabel>Do not disturb</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>

              <Switch className="justify-between px-3" defaultSelected>
                Notification
              </Switch>
              <Switch className="justify-between px-3">Badges</Switch>
              <TextField>
                <Label>Username</Label>
                <Input />
              </TextField>

              <NativeSelectField>
                <Label>Work phone number type</Label>
                <NativeSelect name="work_phone_number_type">
                  <option value="Mobile">Mobile</option>
                  <option value="Phone">Phone</option>
                  <option value="Page">Page</option>
                  <option value="Fax">Fax</option>
                </NativeSelect>
              </NativeSelectField>

              <Select
                className="sm:col-span-3"
                name="company_size"
                placeholder="Select&hellip;"
              >
                <Label> Company size (employees)</Label>
                <SelectButton />
                <SelectPopover>
                  <SelectListBox>
                    <SelectListItem id="1-9">1-9</SelectListItem>
                    <SelectListItem id="10-5-">10-50</SelectListItem>
                    <SelectListItem id="50-250">50-250</SelectListItem>
                    <SelectListItem id="250+">250+</SelectListItem>
                  </SelectListBox>
                </SelectPopover>
              </Select>
            </div>
          </Dialog>
        </Popover>
      </>
    </DialogTrigger>
  );
}

export function ControlledOpen() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <>
      <Button
        aria-label="Settings"
        onPress={() => {
          setIsOpen(true);
        }}
        ref={ref}
      >
        <AccessibleIcon>
          <Settings />
        </AccessibleIcon>
        Settings
      </Button>
      <Popover
        className="min-w-56 rounded-xl"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        triggerRef={ref}
      >
        <Dialog aria-label="Settings">
          <div className="flex flex-col gap-2 p-3">
            <div className="flex gap-4">
              <Avatar
                src="https://images.unsplash.com/photo-1578680671705-0965e325b2ba?q=80&w=2306&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                alt="Lisa Wilson"
              >
                <AvatarBadge aria-label="Available" badge={<Available />} />
              </Avatar>
              <div className="flex flex-col">
                <Strong>Lisa Wilson</Strong>
                <Text className="sm:leading-4">Admin</Text>
              </div>
            </div>

            <Separator />

            <MenuTrigger>
              <MenuButton
                variant="plain"
                className="justify-start gap-3 font-medium"
              >
                <Available className="size-3" />
                Available
              </MenuButton>
              <MenuPopover placement="end top">
                <Menu>
                  <MenuItem>
                    <AccessibleIcon>
                      <Available className="size-3" />
                    </AccessibleIcon>
                    <MenuItemLabel>Available</MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <AccessibleIcon>
                      <Busy className="size-3" />
                    </AccessibleIcon>
                    <MenuItemLabel>Busy</MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <AccessibleIcon>
                      <Away className="size-3" />
                    </AccessibleIcon>
                    <MenuItemLabel>Away</MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <AccessibleIcon>
                      <DoNotDisturb className="size-3" />
                    </AccessibleIcon>
                    <MenuItemLabel>Do not disturb</MenuItemLabel>
                  </MenuItem>
                </Menu>
              </MenuPopover>
            </MenuTrigger>

            <Switch className="justify-between px-3" defaultSelected>
              Notification
            </Switch>
            <Switch className="justify-between px-3">Badges</Switch>
          </div>
        </Dialog>
      </Popover>
    </>
  );
}
