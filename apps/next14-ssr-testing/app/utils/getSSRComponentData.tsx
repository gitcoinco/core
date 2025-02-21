import primitivesSSR from "@gitcoin/ui/primitivesSSR";
import componentsSSR from "@gitcoin/ui/componentsSSR";
import featuresSSR from "@gitcoin/ui/featuresSSR";
import { SSRComponents } from "@gitcoin/ui/types";

export type ComponentType = "primitives" | "components" | "features";

const ssrComponentsData: Record<ComponentType, SSRComponents> = {
  primitives: primitivesSSR,
  components: componentsSSR,
  features: featuresSSR,
};

export const getSSRComponentData = ({
  component,
  type,
}: {
  component: string;
  type: ComponentType;
}) => ssrComponentsData[type].components[component];
