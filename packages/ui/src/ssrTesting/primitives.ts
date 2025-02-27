import { SSRComponent, SSRComponentIndex, SSRComponents } from "@gitcoin/types";

import { generateSSRComponentIndex, generateSSRComponents } from "./utils";

// Toast missing from SSR
const ssrModules = import.meta.glob<{ default: SSRComponent<any> }>(
  [
    "../primitives/**/*.ssr.{ts,tsx}",
    "!../primitives/**/Markdown.ssr.{ts,tsx}",
    "!../primitives/**/MarkdownEditor.ssr.{ts,tsx}",
    "./primitivesCases/*.ssr.{ts,tsx}",
    // "!./primitivesCases/Markdown.ssr.{ts,tsx}",
    // "!./primitivesCases/MarkdownEditor.ssr.{ts,tsx}",
  ],
  {
    eager: true,
  },
);

const components = generateSSRComponents(ssrModules);

const componentRegistry: SSRComponents = {
  title: "Primitives",
  components,
};

export const index: SSRComponentIndex[] = generateSSRComponentIndex(componentRegistry);

export default componentRegistry;
