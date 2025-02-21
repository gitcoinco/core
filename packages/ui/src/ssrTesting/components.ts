import { SSRComponent, SSRComponents } from "@/types";

// Toast missing from SSR
const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  ["../components/**/*.ssr.{ts,tsx}"],
  {
    eager: true,
  },
);

const components = Object.fromEntries(
  Object.entries(ssrModules).map(([path, module]) => {
    // Extract component name from path, e.g: '../primitives/Accordion/Accordion.ssr.tsx' -> 'Accordion'
    const name = path.split("/").at(-2) ?? "";
    return [name.toLowerCase(), { ...module.default, name }];
  }),
);

const componentsSSR: SSRComponents = {
  title: "Components",
  components,
};

export const index = Object.entries(componentsSSR.components).map(([key, { name }]) => ({
  key,
  name,
}));

export default componentsSSR;
