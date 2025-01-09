import type { Meta } from "@storybook/react";
import { MessageCircle } from "lucide-react";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { NotificationBadge } from "@/components/notification-badge";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof NotificationBadge> = {
  title: "Components/Notification badge",
  component: NotificationBadge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "`Notification badges` show notifications, counts, or status information on navigation items and icons. Add `aria-label=*` to its parent to make it accessible.",
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

export function WithDotNotifications() {
  return (
    <div className="flex gap-4">
      <Link className="p-2" aria-label="Chat - 6 new messages">
        <AccessibleIcon>
          <MessageCircle />
        </AccessibleIcon>
        <NotificationBadge show />
      </Link>

      <Button aria-label="Chat - 6 new messages">
        <AccessibleIcon>
          <MessageCircle />
        </AccessibleIcon>
        <NotificationBadge count={10} />
      </Button>
    </div>
  );
}

export function WithNumberNotifications() {
  return (
    <Link className="relative p-2" aria-label="New message">
      <AccessibleIcon>
        <MessageCircle />
      </AccessibleIcon>
      <NotificationBadge count={10} />
    </Link>
  );
}

WithNumberNotifications.parameters = {
  docs: {
    description: {
      story: "Use the `count` prop to render counts.",
    },
  },
};
