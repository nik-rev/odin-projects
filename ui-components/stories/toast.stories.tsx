import type { Meta } from "@storybook/react";

import { Button } from "@/components/button";
import { toast } from "@/components/toast/toast-queue";
import { GlobalToastRegion } from "@/components/toast/toast-region";

import { docs } from "../.storybook/docs";

const meta: Meta = {
  title: "Components/Toast",
  parameters: {
    layout: "center",
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/useToast.html#usetoast" target="_blank">`Toasts`</a> display brief, temporary notifications of actions, errors, or other events in an application.',
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
    <div className="flex flex-col items-center gap-4 p-12">
      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: "Components/Templates unavailable",
            description:
              "Issue template and forms are current unavailable. Please try again later.",
          });
        }}
      >
        Default
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            description:
              "Issue template and forms are current unavailable. Please try again later.",
          });
        }}
      >
        Description only
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: "error",
            title: "Components/Templates unavailable",
            description:
              "Issue template and forms are current unavailable. Please try again later.",
          });
        }}
      >
        Error
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            type: "warning",
            title: "Components/Templates unavailable",
            description:
              "Issue template and forms are current unavailable. Please try again later.",
          });
        }}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onPress={() => {
          toast.add({
            title: "Components/Payment details saved",
            description: "Your payment details have been save successfully.",
            type: "success",
          });
        }}
      >
        Success
      </Button>

      <GlobalToastRegion aria-label="notification" />
    </div>
  );
}
