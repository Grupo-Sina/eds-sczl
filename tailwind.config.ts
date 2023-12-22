import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1920px",
      },
      fontFamily: {
        headingExtraLight: ["Heading Pro Trial Extra Light", "sans-serif"],
        headingLight: ["Heading Pro Trial Light", "sans-serif"],
        heading: ["Heading Pro Trial", "sans-serif"],
        headingThin: ["Heading Pro Trial Thin", "sans-serif"],
        headingBold: ["Heading Pro Trial Bold", "sans-serif"],
        headingExtraBold: ["Heading Pro Trial Extra Bold", "sans-serif"],
        headingHeavy: ["Heading Pro Trial Heavy", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
