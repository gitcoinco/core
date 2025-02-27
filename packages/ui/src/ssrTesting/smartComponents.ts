import { SSRComponent, SSRComponentIndex, SSRComponents } from "@gitcoin/types";

import { generateSSRComponentIndex, generateSSRComponents } from "./utils";

const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  ["../smartComponents/**/*.ssr.{ts,tsx}"],
  {
    eager: true,
  },
);

const components = generateSSRComponents(ssrModules);

const componentRegistry: SSRComponents = {
  title: "Smart Components",
  components,
};

export const index: SSRComponentIndex[] = generateSSRComponentIndex(componentRegistry);

export default componentRegistry;
