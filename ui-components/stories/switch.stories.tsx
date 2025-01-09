import type { Meta } from "@storybook/react";

import { Description, Label } from "@/components/field";
import {
  Switch,
  Switches,
  SwitchField,
  SwitchGroup,
} from "@/components/switch";
import { Text, TextLink } from "@/components/text";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/Switch.html#switch">`switch`</a> allows a user to turn a setting on or off.',
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
  return <Switch>Email notification</Switch>;
}

export function WithDescription() {
  return (
    <SwitchField>
      <Switch>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
}

export function WithDisabled() {
  return (
    <SwitchField>
      <Switch isDisabled>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
}

export function WithReadonly() {
  return (
    <SwitchField>
      <Switch isReadOnly>Email notifications</Switch>
      <Description>
        Get email to find out what's going on when you'are not online.
      </Description>
    </SwitchField>
  );
}

export function LabelPosition() {
  return (
    <SwitchField>
      <Switch labelPosition="left">Email notifications</Switch>
    </SwitchField>
  );
}

export function SwitchGroups() {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Switches>
        <Switch>Protect your posts</Switch>
        <Switch>Protect your videos</Switch>
        <Switch>Photo tagging</Switch>
      </Switches>
    </SwitchGroup>
  );
}

export function WithSwitchDescription() {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Switches>
        <SwitchField>
          <Switch labelPosition="left">Protect your posts</Switch>
          <Description elementType="div">
            <Text>
              When selected, your posts and other account information are only
              visible to people who follow you.{" "}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Protect your videos</Switch>
          <Description>
            If selected, videos in your posts will not be downloadable by
            default. This setting applies to posts going forward and is not
            retroactive.
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Photo tagging</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
}

export function WithGroupDescription() {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Description>
        Manage what information you allow other people on X to see
      </Description>
      <Switches>
        <SwitchField>
          <Switch labelPosition="left">Protect your posts</Switch>
          <Description elementType="div">
            <Text>
              When selected, your posts and other account information are only
              visible to people who follow you.{" "}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Protect your videos</Switch>
          <Description>
            If selected, videos in your posts will not be downloadable by
            default. This setting applies to posts going forward and is not
            retroactive.
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Photo tagging</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
}

export function WithGroupItemDisabled() {
  return (
    <SwitchGroup className="max-w-2xl">
      <Label>Audience and tagging</Label>
      <Description>
        Manage what information you allow other people on X to see
      </Description>
      <Switches>
        <SwitchField>
          <Switch labelPosition="left" isDisabled>
            Protect your posts
          </Switch>
          <Description elementType="div">
            <Text>
              When selected, your posts and other account information are only
              visible to people who follow you.{" "}
              <TextLink className="inline">Learn more</TextLink>
            </Text>
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Protect your videos</Switch>
          <Description>
            If selected, videos in your posts will not be downloadable by
            default. This setting applies to posts going forward and is not
            retroactive.
          </Description>
        </SwitchField>

        <SwitchField>
          <Switch labelPosition="left">Photo tagging</Switch>
        </SwitchField>
      </Switches>
    </SwitchGroup>
  );
}
