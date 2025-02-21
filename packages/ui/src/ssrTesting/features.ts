import { SSRComponent, SSRComponents } from "@/ssrTesting/types";

// Toast missing from SSR
const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  ["../features/**/*.ssr.{ts,tsx}"],
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

const featuresSSR: SSRComponents = {
  title: "Features",
  components,
};

export const index = Object.entries(featuresSSR.components).map(([key, { name }]) => ({
  key,
  name,
}));

export default featuresSSR;
