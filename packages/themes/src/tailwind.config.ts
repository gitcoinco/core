import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { createThemes } from "tw-colors";
import { colors } from "./colors";
import { leaderboardPlugin, paginationPlugin } from "./plugins";
import { leaderboardColors, paginationColors } from "./themes";

const config: Omit<Config, "content"> = {
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    colors,
    extend: {
      borderWidth: {
        "1.5": "1.5px",
      },
      height: {
        "18": "4.5rem",
      },
      width: {
        "102": "25.5rem",
      },
      maxWidth: {
        "105": "26.25rem",
      },
      minHeight: {
        "18": "4.5rem",
      },
      zIndex: {
        "100": "100",
      },
      boxShadow: {
        navbar: "0px 4px 24px -8px rgba(0, 0, 0, 0.08)",
        toast:
          "0px 24px 94px 0px rgba(0, 0, 0, 0.17), 0px 7.235px 28.338px 0px rgba(0, 0, 0, 0.11), 0px 3.005px 11.77px 0px rgba(0, 0, 0, 0.09), 0px 1.087px 4.257px 0px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        "ui-mono": ["DM Mono", "serif"],
        "ui-sans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        p: [
          "1rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
            letterSpacing: undefined,
          },
        ],
        body: ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400", letterSpacing: undefined }],
      },
      borderRadius: {
        "3.5": "14px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      aspectRatio: {
        "3/1": "3 / 1",
      },
    },
  },
  plugins: [tailwindcssAnimate, leaderboardPlugin, paginationPlugin],
} as Omit<Config, "content">;

// Define the themes with their respective color configurations
const themes = createThemes(
  {
    light: {
      ...config.theme?.colors,
      leaderboard: leaderboardColors.light,
      pagination: paginationColors.light,
    },
    dark: {
      ...config.theme?.colors,
      leaderboard: leaderboardColors.dark,
      pagination: paginationColors.dark,
    },
  },
  { defaultTheme: "light" },
);

// Merge the themes with the base Tailwind configuration
export const tailwindConfig = {
  ...config,
  plugins: [...config.plugins, themes],
} as Omit<Config, "content">;
