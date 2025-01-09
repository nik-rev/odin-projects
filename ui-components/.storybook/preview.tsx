import "@/css/index.css";
import "@/css/initials.css";
import "./preview.css";
import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      // change theme
      [
        `${context.globals.theme}`,
        ...(document
          .querySelector("body")
          ?.className.split(" ")
          .filter((name) => name.includes("-theme")) ?? []),
      ].forEach((name) => {
        if (name === "") {
          name = "zinc-theme";
        }

        document.querySelector("body")?.classList.toggle(name);
      });

      // change mode
      document
        .querySelectorAll(".docs-story")
        ?.forEach((item) => item.classList.add("bg-background"));

      const htmlClass = document.querySelector("html")?.className ?? "";
      const mode = context.globals.mode;

      if (mode === "light") {
        if (!htmlClass.includes("light")) {
          document.querySelector("html")?.classList.remove("dark");
          document.querySelector("html")?.classList.toggle("light");
        }
      } else if (mode === "dark") {
        if (!htmlClass.includes("dark")) {
          document.querySelector("html")?.classList.remove("light");
          document.querySelector("html")?.classList.toggle("dark");
        }
      }

      const html = document.querySelector("html");

      if (html) {
        html.dir = context.globals.textDirection;
      }

      return <Story />;
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    grids: { disabled: true },
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {},
    },
    options: {
      storySort: {
        order: ["Overview", "*"],
      },
    },
  },
};

export default preview;
