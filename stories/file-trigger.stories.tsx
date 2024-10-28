import type { Meta } from "@storybook/react";
import React from "react";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { FileTrigger } from "@/components/file-trigger";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Button> = {
  title: "Components/File trigger",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/FileTrigger.html" target="_blank">`FileTrigger`</a> allows a user to access the file system with any pressable React Aria component.',
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
  const [file, setFile] = React.useState<string[] | null>(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          if (!e) {
            return;
          }

          const files = [...e];
          const filenames = files.map((file) => file.name);
          setFile(filenames);
        }}
      >
        <Button variant="outline">Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  );
}

export function ChangeProfile() {
  const [src, setSrc] = React.useState<string | undefined>();

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
