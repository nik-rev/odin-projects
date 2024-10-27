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
        destructive: "rgb(var(--destructive))",
        warning: "rgb(var(--warning))",
        muted: "rgb(var(--muted))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [reactAriaComponents, animate, containerQueries],
};
export default config;
