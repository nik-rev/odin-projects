import containerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import reactAriaComponents from "tailwindcss-react-aria-components";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        accent: "rgb(var(--accent))",
        success: "rgb(var(--success))",
        success0: "rgb(var(--success0))",
        success1: "rgb(var(--success1))",
        destructive: "rgb(var(--destructive))",
        destructive0: "rgb(var(--destructive0))",
        destructive1: "rgb(var(--destructive1))",
        warning: "rgb(var(--warning))",
        warning0: "rgb(var(--warning0))",
        warning1: "rgb(var(--warning1))",
        muted: "rgb(var(--muted))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [reactAriaComponents, animate, containerQueries],
};
export default config;
