import { SSRComponent, SSRComponentIndex, SSRComponents } from "@gitcoin/types";

import { generateSSRComponentIndex, generateSSRComponents } from "./utils";

const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  [
    "../components/**/*.ssr.{ts,tsx}",
    // "!../components/**/Form.ssr.{ts,tsx}",
    "!../components/**/FormWithPersist.ssr.{ts,tsx}",
    "!../components/**/ProgressForm.ssr.{ts,tsx}",
    "./componentsCases/*.ssr.{ts,tsx}",
    // "!./componentsCases/Form.ssr.{ts,tsx}",
    "!./componentsCases/FormWithPersist.ssr.{ts,tsx}",
    "!./componentsCases/ProgressForm.ssr.{ts,tsx}",
  ],
  {
    eager: true,
  },
);

const components = generateSSRComponents(ssrModules);

const componentRegistry: SSRComponents = {
  title: "Components",
  components,
};

export const index: SSRComponentIndex[] = generateSSRComponentIndex(componentRegistry);

export default componentRegistry;
