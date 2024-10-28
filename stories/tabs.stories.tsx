import type { Meta } from "@storybook/react";
import React from "react";
import { type Key } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { NativeSelect, NativeSelectField } from "@/components/native-select";
import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";
import { Strong } from "@/components/text";

import { docs } from "../.storybook/docs";
import {
  AlbumsIcon,
  ArtistsIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  KeyboardIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  RecordIcon,
  ScreenShareIcon,
  UserIcon,
  VideoCameraIcon,
} from "./~icons";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
    docs: {
      ...docs,
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Tabs.html#tabs" target="_blank">`Tabs`</a> organize content into multiple sections and allow users to navigate between them.',
      },
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
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation">
          <Tab id="Overview">Overview</Tab>
          <Tab id="Activity">Activity</Tab>
          <Tab id="Settings">Settings</Tab>
          <Tab id="Collaborators">Collaborators</Tab>
          <Tab id="Notifications">Notifications</Tab>
        </TabList>

        <TabPanel id="Overview" />
        <TabPanel id="Activity" />
        <TabPanel id="Settings" />
        <TabPanel id="Collaborators" />
        <TabPanel id="Notifications" />
      </Tabs>
    </div>
  );
}

export function WithIcons() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <AccessibleIcon>
              <UserIcon />
            </AccessibleIcon>
            Profile
          </Tab>

          <Tab id="billing">
            <AccessibleIcon>
              <CreditCardIcon />
            </AccessibleIcon>
            Billing
          </Tab>
          <Tab id="notifications">
            <AccessibleIcon>
              <BellAlertIcon />
            </AccessibleIcon>
            Notifications
          </Tab>
        </TabList>

        <TabPanel id="profile" />

        <TabPanel id="billing" />
        <TabPanel id="notifications" />
      </Tabs>
    </div>
  );
}

export function WithBadges() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs>
        <TabList aria-label="Navigation" className="px-4">
          <Tab id="profile">
            <AccessibleIcon>
              <UserIcon />
            </AccessibleIcon>
            Profile
          </Tab>

          <Tab id="billing">
            <AccessibleIcon>
              <CreditCardIcon />
            </AccessibleIcon>
            Billing
          </Tab>
          <Tab id="notifications">
            <AccessibleIcon>
              <BellAlertIcon />
            </AccessibleIcon>
            Notifications
            <span>8</span>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export function VerticalTabs() {
  return (
    <div className="p-4 sm:p-12">
      <Strong>Components</Strong>
      <Tabs orientation="vertical" className="mt-4">
        <TabList aria-label="Components">
          <Tab id="Alert">Alert</Tab>
          <Tab id="Avatar">Avatar</Tab>
          <Tab id="Badge">Badge</Tab>
          <Tab id="Button">Button</Tab>
          <Tab id="Checkbox">Checkbox</Tab>
          <Tab id="Dialog">Dialog</Tab>
        </TabList>

        <TabPanel id="Alert" />
        <TabPanel id="Avatar" />
        <TabPanel id="Badge" />
        <TabPanel id="Button" />
        <TabPanel id="Checkbox" />
        <TabPanel id="Dialog" />
      </Tabs>
    </div>
  );
}

export function PillsTab() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills">
        <TabList aria-label="Settings">
          <Tab id="My Account">My Account</Tab>
          <Tab id="Company">Company</Tab>
          <Tab id="Team Members">Team Members</Tab>
          <Tab id="Billing">Billing</Tab>
        </TabList>
        <TabPanel id="My Account" />
        <TabPanel id="Company" />
        <TabPanel id="Team Members" />
        <TabPanel id="Billing" />
      </Tabs>
    </div>
  );
}

export function VerticalPillsTab() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="pills" orientation="vertical">
        <TabList aria-label="Settings">
          <Tab id="General">
            <AccessibleIcon>
              <Cog6ToothIcon />
            </AccessibleIcon>
            General
          </Tab>
          <Tab id="Video">
            <AccessibleIcon>
              <VideoCameraIcon />
            </AccessibleIcon>
            Video
          </Tab>
          <Tab id="Audio">
            <AccessibleIcon>
              <MicrophoneIcon />
            </AccessibleIcon>
            Audio
          </Tab>
          <Tab id="Screen Share">
            <AccessibleIcon>
              <ScreenShareIcon />
            </AccessibleIcon>
            Screen Share
          </Tab>
          <Tab id="Team Chat">
            <AccessibleIcon>
              <ChatBubbleLeftRightIcon />
            </AccessibleIcon>
            Team Chat
          </Tab>
          <Tab id="Recording">
            <AccessibleIcon>
              <RecordIcon />
            </AccessibleIcon>
            Recording
          </Tab>
          <Tab id="Keyboard Shortcuts">
            <AccessibleIcon>
              <KeyboardIcon />
            </AccessibleIcon>
            Keyboard Shortcuts
          </Tab>
        </TabList>

        <TabPanel id="General" />
        <TabPanel id="Video" />
        <TabPanel id="Audio" />
        <TabPanel id="Screen Share" />
        <TabPanel id="Team Chat" />
        <TabPanel id="Recording" />
        <TabPanel id="Keyboard Shortcuts" />
      </Tabs>
    </div>
  );
}

export function SegmentsTab() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Artists">Artists</Tab>
          <Tab id="Albums">Albums</Tab>
          <Tab id="Songs">Songs</Tab>
        </TabList>

        <TabPanel id="Artists" />
        <TabPanel id="Albums" />
        <TabPanel id="Songs" />
      </Tabs>
    </div>
  );
}

export function SegmentsTabWithIcon() {
  return (
    <div className="p-4 sm:p-12">
      <Tabs variant="segment">
        <TabList aria-label="Music">
          <Tab id="Artists">
            <AccessibleIcon>
              <ArtistsIcon />
            </AccessibleIcon>
            Artists
          </Tab>
          <Tab id="Albums">
            <AccessibleIcon>
              <AlbumsIcon />
            </AccessibleIcon>
            Albums
          </Tab>
          <Tab id="Songs">
            <AccessibleIcon>
              <MusicalNoteIcon />
            </AccessibleIcon>
            Songs
          </Tab>
        </TabList>

        <TabPanel id="Artists" />
        <TabPanel id="Albums" />
        <TabPanel id="Songs" />
      </Tabs>
    </div>
  );
}

const tabs = [
  { title: "Components/Overview" },
  { title: "Components/Activity" },
  { title: "Components/Settings" },
  { title: "Components/Collaborators" },
  { title: "Components/Notifications" },
];

export function TabsOnMobile() {
  const [tab, setTab] = React.useState<Key>("Overview");

  return (
    <div className="p-4 sm:p-12">
      <NativeSelectField className="block sm:hidden">
        <NativeSelect
          value={tab}
          aria-label="Preference page"
          onChange={(e) => {
            setTab(e.target.value);
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.title} value={tab.title}>
              {tab.title}
            </option>
          ))}
        </NativeSelect>
      </NativeSelectField>

      <Tabs selectedKey={tab} onSelectionChange={setTab}>
        <TabList
          className="hidden sm:flex"
          aria-label="Navigation"
          items={tabs}
        >
          {(item) => <Tab id={item.title}>{item.title}</Tab>}
        </TabList>

        {tabs.map((tab) => (
          <TabPanel key={tab.title} id={tab.title} />
        ))}
      </Tabs>
    </div>
  );
}

TabsOnMobile.parameters = {
  docs: {
    description: {
      story:
        "You can scroll tablist on mobile. If this is not what you want, you can show a selector on mobile. Please resize the screen to test.",
    },
  },
};
