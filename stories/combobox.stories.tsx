import type { Meta } from "@storybook/react";
import { Search } from "lucide-react";
import React from "react";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxClearButton,
  ComboBoxGroup,
  ComboBoxInput,
  ComboBoxListBox,
  ComboBoxListItem,
  ComboBoxListItemDescription,
  ComboBoxListItemLabel,
  ComboBoxPopover,
  ComboBoxSection,
} from "@/components/combobox";
import { Description, FieldError, Label } from "@/components/field";
import { Form } from "@/components/form";
import { Text } from "@/components/text";

import { docs } from "../.storybook/docs";
import { users } from "./users";

const meta: Meta<typeof ComboBox> = {
  title: "ComboBox",
  component: ComboBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/ComboBox.html#combobox" target="_blank">`combo box`</a> combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
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

//
// export function BasicExample() {
//   return (
//     <ComboBox>
//       <Label>Favorite Animal</Label>
//       <Description>Choose your favorite animal</Description>
//       <ComboBoxGroup>
//         <ComboBoxInput />
//         <ComboBoxClearButton />
//         <ComboBoxButton />
//       </ComboBoxGroup>
//
//       <ComboBoxPopover>
//         <ComboBoxListBox>
//           <ComboBoxListItem>Aardvark</ComboBoxListItem>
//           <ComboBoxListItem>Cat</ComboBoxListItem>
//           <ComboBoxListItem>Dog</ComboBoxListItem>
//           <ComboBoxListItem>Kangaroo</ComboBoxListItem>
//           <ComboBoxListItem>Panda</ComboBoxListItem>
//           <ComboBoxListItem>Snake</ComboBoxListItem>
//         </ComboBoxListBox>
//       </ComboBoxPopover>
//     </ComboBox>
//   );
// }

export function WithDescription() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function WithDescriptionHidden() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <Description>Choose your favorite animal</Description>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function OpenOnInputFocus() {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function AllowsEmptyCollection() {
  return (
    <ComboBox menuTrigger="focus" allowsEmptyCollection>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox
          renderEmptyState={() => (
            <Text className="py-4 text-center">Not result found</Text>
          )}
        >
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem>Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

AllowsEmptyCollection.parameters = {
  docs: {
    description: {
      story:
        "Whether the combo box allows the menu to be open when the collection is empty.",
    },
  },
};

export function DisabledItems() {
  return (
    <ComboBox disabledKeys={["snake"]}>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function DisabledComboBox() {
  return (
    <ComboBox isDisabled>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function ReadonlyComboBox() {
  return (
    <ComboBox isReadOnly>
      <Label>Favorite Animal</Label>
      <Description>Choose your favorite animal</Description>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>
      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem>Aardvark</ComboBoxListItem>
          <ComboBoxListItem>Cat</ComboBoxListItem>
          <ComboBoxListItem>Dog</ComboBoxListItem>
          <ComboBoxListItem>Kangaroo</ComboBoxListItem>
          <ComboBoxListItem>Panda</ComboBoxListItem>
          <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function Sections() {
  return (
    <ComboBox>
      <Label>Preferred fruit or vegetable</Label>
      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxSection title="Fruit">
            <ComboBoxListItem id="Apple">Apple</ComboBoxListItem>
            <ComboBoxListItem id="Banana">Banana</ComboBoxListItem>
            <ComboBoxListItem id="Orange">Orange</ComboBoxListItem>
            <ComboBoxListItem id="Honeydew">Honeydew</ComboBoxListItem>
            <ComboBoxListItem id="Grapes">Grapes</ComboBoxListItem>
            <ComboBoxListItem id="Watermelon">Watermelon</ComboBoxListItem>
            <ComboBoxListItem id="Cantaloupe">Cantaloupe</ComboBoxListItem>
            <ComboBoxListItem id="Pear">Pear</ComboBoxListItem>
          </ComboBoxSection>
          <ComboBoxSection title="Vegetable">
            <ComboBoxListItem id="Cabbage">Cabbage</ComboBoxListItem>
            <ComboBoxListItem id="Broccoli">Broccoli</ComboBoxListItem>
            <ComboBoxListItem id="Carrots">Carrots</ComboBoxListItem>
            <ComboBoxListItem id="Lettuce">Lettuce</ComboBoxListItem>
            <ComboBoxListItem id="Spinach">Spinach</ComboBoxListItem>
            <ComboBoxListItem id="Bok Choy">Bok Choy</ComboBoxListItem>
            <ComboBoxListItem id="Cauliflower">Cauliflower</ComboBoxListItem>
            <ComboBoxListItem id="Potatoes">Potatoes</ComboBoxListItem>
          </ComboBoxSection>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function WithTextSlots() {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Select action</Label>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox>
          <ComboBoxListItem textValue="Add to queue">
            <ComboBoxListItemLabel>Add to queue</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Add to current watch queue.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Add review">
            <ComboBoxListItemLabel>Add review</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Post a review for the episode.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Subscribe to series">
            <ComboBoxListItemLabel>Subscribe to series</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Add series to your subscription list and be notified when a new
              episode airs.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
          <ComboBoxListItem textValue="Report">
            <ComboBoxListItemLabel>Report</ComboBoxListItemLabel>
            <ComboBoxListItemDescription>
              Report an issue/violation.
            </ComboBoxListItemDescription>
          </ComboBoxListItem>
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function WithAvatar() {
  return (
    <ComboBox menuTrigger="focus">
      <Label>Assign to</Label>

      <ComboBoxGroup>
        <ComboBoxInput />
        <ComboBoxButton />
      </ComboBoxGroup>

      <ComboBoxPopover>
        <ComboBoxListBox items={users}>
          {(user) => (
            <ComboBoxListItem textValue={user.name}>
              <Avatar
                className="rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              <ComboBoxListItemLabel>{user.name}</ComboBoxListItemLabel>
            </ComboBoxListItem>
          )}
        </ComboBoxListBox>
      </ComboBoxPopover>
    </ComboBox>
  );
}

export function Validation() {
  return (
    <Form className="flex flex-col items-start gap-2">
      <ComboBox isRequired>
        <Label>Favorite Animal</Label>
        <Description>Choose your favorite animal</Description>
        <ComboBoxGroup>
          <ComboBoxInput />
          <ComboBoxButton />
        </ComboBoxGroup>
        <ComboBoxPopover>
          <ComboBoxListBox>
            <ComboBoxListItem>Aardvark</ComboBoxListItem>
            <ComboBoxListItem>Cat</ComboBoxListItem>
            <ComboBoxListItem>Dog</ComboBoxListItem>
            <ComboBoxListItem>Kangaroo</ComboBoxListItem>
            <ComboBoxListItem>Panda</ComboBoxListItem>
            <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
          </ComboBoxListBox>
        </ComboBoxPopover>
        <FieldError />
      </ComboBox>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

// export function SearchBox() {
//   const ref = React.useRef<HTMLInputElement>(null);
//
//   React.useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault();
//
//         if (ref.current) {
//           ref.current.focus();
//         }
//       }
//     };
//     document.addEventListener("keydown", down);
//
//     return () => {
//       document.removeEventListener("keydown", down);
//     };
//   }, []);
//
//   return (
//     <ComboBox menuTrigger="focus" aria-label="Search">
//       <Description>Open the combobox using ⌘K</Description>
//       <ComboBoxGroup>
//         <AccessibleIcon>
//           <Search />
//         </AccessibleIcon>
//
//         <ComboBoxInput placeholder="Search&hellip;" ref={ref} />
//         <ComboBoxClearButton />
//       </ComboBoxGroup>
//
//       <ComboBoxPopover>
//         <ComboBoxListBox>
//           <ComboBoxListItem>Aardvark</ComboBoxListItem>
//           <ComboBoxListItem>Cat</ComboBoxListItem>
//           <ComboBoxListItem>Dog</ComboBoxListItem>
//           <ComboBoxListItem>Kangaroo</ComboBoxListItem>
//           <ComboBoxListItem>Panda</ComboBoxListItem>
//           <ComboBoxListItem id="snake">Snake</ComboBoxListItem>
//         </ComboBoxListBox>
//       </ComboBoxPopover>
//       <FieldError />
//     </ComboBox>
//   );
// }
