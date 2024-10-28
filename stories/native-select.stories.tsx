import { Description, Label } from "@/components/field";
import { NativeSelect, NativeSelectField } from "@/components/native-select";

import { docs } from "../.storybook/docs";

const meta = {
  title: "Components/Native select",
  component: NativeSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          '`Native select` renders <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" target="_blank">`select`</a> HTML element represents a control that provides a menu of options.',
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
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
}

export function WithDescription() {
  return (
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
}

export function WithDescriptionHiddenTitle() {
  return (
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
      <Description>Please choose an option</Description>
    </NativeSelectField>
  );
}

export function DisabledSelect() {
  return (
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet" disabled>
        <option value="dog">Dog</option>
        <option value="cat" disabled>
          Cat
        </option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
}

export function DisabledOptions() {
  return (
    <NativeSelectField className="sm:w-80">
      <Label>Choose a pet</Label>
      <Description>Please choose an option</Description>
      <NativeSelect name="pet">
        <option value="dog">Dog</option>
        <option value="cat" disabled>
          Cat
        </option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </NativeSelect>
    </NativeSelectField>
  );
}
