import type { Meta } from "@storybook/react";
import { Image } from "lucide-react";
import React from "react";
import { FileTrigger, isFileDropItem } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Button } from "@/components/button";
import { DropZone } from "@/components/dropzone";
import { Text } from "@/components/text";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof DropZone> = {
  title: "Components/Dropzone",
  component: DropZone,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'A <a href="https://react-spectrum.adobe.com/react-aria/DropZone.html#dropzone" target="_blank">`drop zone`</a> is an area into which one or multiple objects can be dragged and dropped.',
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
  const [droppedImage, setDroppedImage] = React.useState<string | undefined>();

  return (
    <DropZone
      getDropOperation={(types) =>
        types.has("image/jpeg") || types.has("image/png") ? "copy" : "cancel"
      }
      onDrop={async (e) => {
        const item = e.items
          .filter(isFileDropItem)
          .find(
            (item) => item.type === "image/jpeg" || item.type === "image/png",
          );
        if (item) {
          setDroppedImage(URL.createObjectURL(await item.getFile()));
        }
      }}
    >
      {droppedImage ? (
        <img
          alt=""
          src={droppedImage}
          className="aspect-square size-full object-contain"
        />
      ) : (
        <div className="flex flex-1 flex-col gap-2 py-6">
          <div className="flex flex-1 justify-center">
            <AccessibleIcon>
              <Image />
            </AccessibleIcon>
          </div>
          <div className="flex flex-1">
            <FileTrigger
              acceptedFileTypes={["image/png", "image/jpeg"]}
              allowsMultiple={false}
              onSelect={async (e) => {
                if (e) {
                  const files = [...e];
                  const item = files.at(0);

                  if (item) {
                    setDroppedImage(URL.createObjectURL(item));
                  }
                }
              }}
            >
              <Button
                variant="unstyle"
                className="text-nowrap text-base/6 font-medium text-accent sm:text-sm/6"
              >
                Upload a file
              </Button>
            </FileTrigger>
            &nbsp;
            <Text>or drag and drop</Text>
          </div>
          <div className="flex flex-1 justify-center">
            <Text>PNG, JPG, GIF up to 10MB</Text>
          </div>
        </div>
      )}

      <input type="hidden" name="image" value={droppedImage} />
    </DropZone>
  );
}
