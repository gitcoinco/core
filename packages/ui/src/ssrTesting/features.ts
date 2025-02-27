import { SSRComponent, SSRComponentIndex, SSRComponents } from "@/types";

import { generateSSRComponentIndex, generateSSRComponents } from "./utils";

const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  ["../features/**/*.ssr.{ts,tsx}", "./featuresCases/*.ssr.{ts,tsx}"],
  {
    eager: true,
  },
);

const components = generateSSRComponents(ssrModules);

const componentRegistry: SSRComponents = {
  title: "Features",
  components,
};

export const index: SSRComponentIndex[] = generateSSRComponentIndex(componentRegistry);

export default componentRegistry;
