import { SSRComponent, SSRComponents } from "@/types";

export const generateSSRComponentIndex = (componentRegistry: SSRComponents) => {
  return Object.entries(componentRegistry.components).map(([key, { name, isClient }]) => ({
    key,
    name,
    isClient,
  }));
};

export const generateSSRComponents = (
  ssrModules: Record<
    string,
    {
      default: SSRComponent<any>;
    }
  >,
) => {
  return Object.fromEntries(
    Object.entries(ssrModules).map(([path, module]) => {
      // Extract component name from path, e.g: '../primitives/Accordion/Accordion.ssr.tsx' -> 'Accordion'
      const name = path.split("/").at(-2) ?? "";
      return [name.toLowerCase(), { ...module.default, name }];
    }),
  );
};
