import { SSRComponent, SSRComponents } from "@/ssrTesting/types";

const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  "../primitives/**/*.ssr.{ts,tsx}",
  {
    eager: true,
  },
);

const components = Object.fromEntries(
  Object.entries(ssrModules).map(([path, module]) => {
    // Extract component name from path, e.g: '../primitives/Accordion/Accordion.ssr.tsx' -> 'accordion'
    const name = path.split("/").at(-2)?.toLowerCase() ?? "";
    return [name, module.default];
  }),
);

const primitivesSSR: SSRComponents = {
  title: "Primitives",
  components,
};

export const index = Object.keys(primitivesSSR.components);

export default primitivesSSR;
