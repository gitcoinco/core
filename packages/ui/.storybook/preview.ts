import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/index.css";
import { handlers } from "../src/mocks/handlers";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Welcome",
          "Docs",
          "Styles",
          "Features",
          ["Checker", "Retrofunding", "Application", "*"],
          "Components",
          "Primitives",
          "Shadcn",
          "*",
        ],
        locales: "en-US",
      },
    },
    msw: {
      handlers,
    },
  },

  loaders: [mswLoader],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
  ],

  tags: ["autodocs"],
};

// NOTE: Example of global loaders
// export const loaders = [
//   async () => ({
//     userData: await fetch('/api/user').then((res) => res.json()),
//   }),
// ];

export default preview;
