import { Description, Label } from "@/components/field";
import { SearchField, SearchInput } from "@/components/search-field";

import { docs } from "../.storybook/docs";

const meta = {
  title: "Components/Search Field",
  component: SearchField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/SearchField.html#searchfield" target="_blank">`search field`</a> allows a user to enter and clear a search query..',
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
    <SearchField>
      <Label>Search</Label>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
}

export function WithDescription() {
  return (
    <SearchField>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
}

export function WithFollowingDescription() {
  return (
    <SearchField>
      <Label>Search</Label>
      <SearchInput placeholder="Search&hellip;" />
      <Description>Input search. Beep boop.</Description>
    </SearchField>
  );
}

export function WithDisabled() {
  return (
    <SearchField isDisabled>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
}

export function WithReadonly() {
  return (
    <SearchField isReadOnly>
      <Label>Search</Label>
      <Description>Input search. Beep boop.</Description>
      <SearchInput placeholder="Search&hellip;" />
    </SearchField>
  );
}
