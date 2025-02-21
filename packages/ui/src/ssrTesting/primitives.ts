import { SSRComponent, SSRComponents } from "@/types";

// Toast missing from SSR
const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  [
    "../primitives/**/*.ssr.{ts,tsx}",
    "!../primitives/**/Markdown.ssr.{ts,tsx}",
    "!../primitives/**/MarkdownEditor.ssr.{ts,tsx}",
  ],
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

const primitivesSSR: SSRComponents = {
  title: "Primitives",
  components,
};

export const index = Object.entries(primitivesSSR.components).map(([key, { name, isClient }]) => ({
  key,
  name,
  isClient,
}));

export default primitivesSSR;
