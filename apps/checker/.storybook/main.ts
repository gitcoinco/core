import { withoutVitePlugins } from "@storybook/builder-vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  core: {
    disableTelemetry: true, // 👈 Used to ignore update notifications.
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, ["vite:dts"]);

    return config;
  },
};
export default config;
