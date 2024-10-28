import type { Meta } from "@storybook/react";
import { FolderPlus, Plus } from "lucide-react";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Button } from "@/components/button";
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateHeading,
  EmptyStateIcon,
} from "@/components/empty-state";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Button> = {
  title: "Components/Empty state",
  component: Button,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          '<a href="https://tailwindui.com/components/application-ui/feedback/empty-states" target="_blank">`EmptyState`</a> is used as placeholder to tell users why content is missing.',
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
    <EmptyState className="h-screen">
      <EmptyStateIcon>
        <FolderPlus strokeWidth="1" />
      </EmptyStateIcon>
      <EmptyStateHeading>No projects</EmptyStateHeading>
      <EmptyStateDescription>
        Get started by creating a new project.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <AccessibleIcon>
            <Plus />
          </AccessibleIcon>
          New Project
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}
