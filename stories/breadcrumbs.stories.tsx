import type { Meta } from "@storybook/react";

import { Breadcrumb, Breadcrumbs } from "@/components/breadcrumbs";

import { docs } from "../.storybook/docs";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          '<a href="https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html#breadcrumbs" target="_blank">`Breadcrumbs`</a> display a hierarchy of links to the current page or resource in an application.',
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
    <Breadcrumbs>
      <Breadcrumb href="/">Home</Breadcrumb>
      <Breadcrumb href="/react-aria">React Aria</Breadcrumb>
      <Breadcrumb>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
