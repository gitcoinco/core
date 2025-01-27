import type { TestRunnerConfig } from "@storybook/test-runner";
import { injectAxe } from "axe-playwright";

// TODO: Enable a11y check
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  // async postVisit(page) {
  //   await checkA11y(page, "#storybook-root", {
  //     detailedReport: true,
  //     detailedReportOptions: {
  //       html: true,
  //     },
  //   });
  // },
};

export default config;
