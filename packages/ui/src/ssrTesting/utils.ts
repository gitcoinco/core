import { SSRComponent, SSRComponents } from "@/types";

export const generateSSRComponentIndex = (componentRegistry: SSRComponents) => {
  return Object.entries(componentRegistry.components).map(
    ([key, { name, isClient = false, isFullNext = true, isDynamic = false, tooltipMessage }]) => ({
      key,
      name,
      isClient,
      isFullNext,
      isDynamic,
      tooltipMessage,
    }),
  );
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
    Object.entries(ssrModules)
      .map(([path, module]) => {
        // Extract component name from path, e.g: '../primitives/Accordion/Accordion.ssr.tsx' -> 'Accordion'
        const filename = path.split("/").at(-1) ?? "";
        const name = filename.split(".")[0];
        return [name.toLowerCase(), { ...module.default, name }];
      })
      .sort((a, b) => (a[0] >= b[0] ? 1 : -1)),
  );
};
